
using System;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace DurableFunctionsMonitor.DotNetBackend
{
    public static class Globals
    {
        // Validates that the incoming request is properly authenticated
        public static void ValidateIdentity(ClaimsPrincipal principal, IHeaderDictionary headers)
        {
            // Also validating nonce (used when running as a VsCode extension)
            string nonce = Environment.GetEnvironmentVariable("DFM_NONCE");
            if(!string.IsNullOrEmpty(nonce) && nonce != headers["x-dfm-nonce"])
            {
                throw new UnauthorizedAccessException("Invalid nonce. Call is rejected.");
            }

            string siteName = Environment.GetEnvironmentVariable("WEBSITE_SITE_NAME");

            var userNameClaim = principal.FindFirst("preferred_username");
            if(userNameClaim == null)
            {
                if(string.IsNullOrEmpty(siteName))
                {
                    // Running on localhost, skipping identity validation
                    return;
                }

                throw new UnauthorizedAccessException("'preferred_username' claim is missing in the incoming identity. Call is rejected.");
            }

            if(string.IsNullOrEmpty(siteName))
            {
                throw new UnauthorizedAccessException("Looks like you are hosting the tool in Azure, but 'WEBSITE_SITE_NAME' environment variable is missing. Check your App Service configuration.");
            }

            string allowedUserNames = Environment.GetEnvironmentVariable("DFM_ALLOWED_USER_NAMES");
            if(!string.IsNullOrEmpty(allowedUserNames))
            {
                if(!allowedUserNames.Split(',').Contains(userNameClaim.Value))
                {
                    throw new UnauthorizedAccessException($"User {userNameClaim.Value} is not mentioned in DFM_ALLOWED_USER_NAMES config setting. Call is rejected");
                }
            }
        }

        // Fighting with https://github.com/Azure/azure-functions-durable-js/issues/94
        // Could use a custom JsonConverter, but it won't be invoked for nested items :(
        public static string FixUndefinedsInJson(this string json)
        {
            return json.Replace("\": undefined", "\": null");
        }

        // Shared JSON serialization settings
        public static JsonSerializerSettings SerializerSettings = GetSerializerSettings();

        private static JsonSerializerSettings GetSerializerSettings()
        {
            var settings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented,
                DateFormatString = "yyyy-MM-ddTHH:mm:ssZ",
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            settings.Converters.Add(new StringEnumConverter());
            return settings;
        }
    }
}