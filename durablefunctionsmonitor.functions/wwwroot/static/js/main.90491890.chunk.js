(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(163)},113:function(e,t,n){},115:function(e,t,n){e.exports=n.p+"static/media/logo.9b5d7869.svg"},116:function(e,t,n){},118:function(e,t,n){},141:function(e,t,n){},143:function(e,t,n){},145:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(13),a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(111),n(113);var l,s=n(5),c=n(19),u=n(225),m=n(223),p=n(216),h=n(200),d=n(230),f=n(215),g=(n(116),n(195)),y=n(235),v=n(164),E=n(240),b=n(232),_=n(202),C=n(203),S=n(204),O=n(205),P=n(197),T=n(206),w=(n(118),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){var e=this.props.state;return r.createElement("div",null,r.createElement(g.a,{color:e.isLoggedInAnonymously?"secondary":"inherit",onClick:function(t){return e.menuAnchorElement=t.currentTarget}},r.createElement(P.a,null),r.createElement(u.a,{width:5}),r.createElement(y.a,{title:e.isLoggedInAnonymously?"Ensure this endpoint is not exposed to the public!":""},r.createElement(h.a,{color:e.isLoggedInAnonymously?"secondary":"inherit"},e.isLoggedInAnonymously?"Anonymous":e.userName))),!e.isLoggedInAnonymously&&r.createElement(v.a,{anchorEl:e.menuAnchorElement,keepMounted:!0,open:!!e.menuAnchorElement,onClose:function(){return e.menuAnchorElement=void 0}},r.createElement(E.a,{onClick:function(){return e.logout()}},"Login under a different name")),r.createElement(b.a,{open:!e.isLoggedIn},r.createElement(_.a,null,!e.errorMessage&&r.createElement("div",null,r.createElement(C.a,{className:"login-progress"},r.createElement(S.a,null)),r.createElement(O.a,null,"Login in progress...")),!!e.errorMessage&&r.createElement("div",null,r.createElement(C.a,{className:"login-progress"},r.createElement(T.a,{color:"secondary",fontSize:"large"})),r.createElement(O.a,{color:"secondary"},"Login failed. ",e.errorMessage)))))},t=s.b([c.a],t)}(r.Component)),k=n(208),N=n(209),I=n(210),D=n(229),A=n(214),R=n(97),F=n.n(R),M=n(6),L=n(236),x=n(207),V=n(96),W=n.n(V),j=n(95),z=n.n(j),B=(n(141),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){var e=this.props.state;return r.createElement(L.a,{className:"error-snackbar",anchorOrigin:{vertical:"top",horizontal:"right"},open:!!e.errorMessage,autoHideDuration:6e3,onClose:this.handleClose},r.createElement(x.a,{className:"error-snackbar-content",message:r.createElement("span",null,r.createElement(z.a,{className:"error-icon"}),e.errorMessage),action:[r.createElement(k.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleClose},r.createElement(W.a,null))]}))},t.prototype.handleClose=function(){this.props.state.errorMessage=""},s.b([M.d.bound],t.prototype,"handleClose",null),t=s.b([c.a],t)}(r.Component)),q=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){var e=this.props.state;return r.createElement("div",null,r.createElement(k.a,{color:"inherit",onClick:function(t){return e.menuAnchorElement=t.currentTarget}},r.createElement(F.a,null)),r.createElement(v.a,{anchorEl:e.menuAnchorElement,keepMounted:!0,open:!!e.menuAnchorElement,onClose:function(){return e.menuAnchorElement=void 0}},r.createElement(E.a,{onClick:function(){return e.showConnectionParamsDialog()}},"Manage Storage Connection Settings")),r.createElement(b.a,{open:e.connectionParamsDialogOpen,onClose:function(){return e.connectionParamsDialogOpen=!1}},r.createElement(N.a,null,"Manage Storage Connection Setings"),r.createElement(_.a,null,e.inProgress?r.createElement(I.a,null):r.createElement(u.a,{height:4}),r.createElement(O.a,null,"The below values will be saved to host.json and local.settings.json respectively."),r.createElement(D.a,{autoFocus:!0,margin:"dense",label:"Hub Name",fullWidth:!0,disabled:e.inProgress,value:e.hubName,onChange:function(t){return e.hubName=t.target.value}}),r.createElement(D.a,{autoFocus:!0,margin:"dense",label:"Azure Storage Connection String",fullWidth:!0,InputLabelProps:{shrink:!0},placeholder:e.isConnectionStringReadonly?"[Change it via 'AzureWebJobsStorage' env variable]":"",disabled:e.inProgress||e.isConnectionStringReadonly,value:e.connectionString,onChange:function(t){return e.connectionString=t.target.value}}),r.createElement(B,{state:e})),r.createElement(A.a,null,r.createElement(g.a,{onClick:function(){return e.connectionParamsDialogOpen=!1},color:"primary"},"Cancel"),r.createElement(g.a,{onClick:function(){return e.saveConnectionParams()},disabled:!e.hubName||!e.isConnectionStringReadonly&&!e.connectionString||e.inProgress,color:"secondary"},"Save"))))},t=s.b([c.a],t)}(r.Component),H=n(212),J=n(238),K=n(228),U=n(227),Y=n(213),$=n(217),G=n(218),Q=n(219),Z=n(220),X=n(237),ee=n(221),te=n(233),ne=n(61),re=n.n(ne),oe=(n(143),function(){}(),["Timestamp","EventType","Name","ScheduledTime","Result","Details"]),ae=function(){return function(){}}(),ie=["instanceId","name","createdTime","lastUpdatedTime","runtimeStatus","input","output","customStatus"],le=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){return this.props.backendClient.isVsCode?r.createElement(f.a,{href:"#",onClick:this.onLinkClicked},this.props.orchestrationId):r.createElement(f.a,{href:"/api/monitor/orchestrations/"+this.props.orchestrationId,target:"_blank"},this.props.orchestrationId)},t.prototype.onLinkClicked=function(){this.props.backendClient.call("OpenInNewWindow",this.props.orchestrationId)},s.b([M.d.bound],t.prototype,"onLinkClicked",null),t=s.b([c.a],t)}(r.Component),se=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.state.loadOrchestrations(),document.addEventListener("scroll",function(t){var n=t.target.scrollingElement;if(n){n.scrollHeight-window.innerHeight-n.scrollTop<100&&e.props.state.loadOrchestrations()}})},t.prototype.render=function(){var e=this,t=this.props.state;return r.createElement("div",null,t.inProgress?r.createElement(I.a,null):r.createElement(u.a,{height:4}),r.createElement(p.a,{variant:"dense",className:"top-toolbar"},r.createElement(u.a,{width:10}),r.createElement(D.a,{className:"from-input",label:"From \xa0\xa0 (UTC)",type:"datetime-local",InputLabelProps:{shrink:!0},value:this.formatDateTime(t.timeFrom),onChange:function(n){t.timeFrom=e.getDateTimeValue(n)},onBlur:function(){return t.applyTimeFrom()},onKeyPress:this.handleKeyPress}),r.createElement(u.a,{width:50}),r.createElement(H.a,null,r.createElement(J.a,{htmlFor:"filtered-column-select"},"Filtered Column"),r.createElement(K.a,{className:"toolbar-select filtered-column-input",value:t.filteredColumn,onChange:function(e){return t.filteredColumn=e.target.value},inputProps:{id:"filtered-column-select"}},r.createElement(E.a,{value:"0"},"[Not Selected]"),ie.map(function(e){return r.createElement(E.a,{key:e,value:e},e)}))),r.createElement(u.a,{width:20}),r.createElement(H.a,null,r.createElement(J.a,{htmlFor:"filter-operator-select"},"Filter Operator"),r.createElement(K.a,{className:"toolbar-select",value:t.filterOperator,onChange:function(e){return t.filterOperator=e.target.value},inputProps:{id:"filter-operator-select"}},r.createElement(E.a,{value:0},"Equals"),r.createElement(E.a,{value:1},"Starts With"),r.createElement(E.a,{value:2},"Contains"))),r.createElement(u.a,{width:50}),r.createElement(h.a,{style:{flex:1}}),r.createElement(H.a,null,r.createElement(J.a,{htmlFor:"auto-refresh-select"},"Auto-refresh"),r.createElement(K.a,{className:"toolbar-select",inputProps:{id:"auto-refresh-select"},value:t.autoRefresh,onChange:function(e){return t.autoRefresh=e.target.value}},r.createElement(E.a,{value:0},"Never"),r.createElement(E.a,{value:1},"Every 1 sec."),r.createElement(E.a,{value:5},"Every 5 sec."),r.createElement(E.a,{value:10},"Every 10 sec.")))),r.createElement(p.a,{variant:"dense",className:"top-toolbar"},r.createElement(H.a,null,r.createElement(J.a,{className:"till-label",htmlFor:"till-checkbox",shrink:!0},"Till"),r.createElement(U.a,{id:"till-checkbox",className:"till-checkbox",checked:t.timeTillEnabled,onChange:function(e){return t.timeTillEnabled=e.target.checked}})),r.createElement(D.a,{className:"till-input",label:"(UTC)",placeholder:"[Now]",InputLabelProps:{shrink:!0},type:t.timeTillEnabled?"datetime-local":"text",disabled:!t.timeTillEnabled,value:t.timeTillEnabled?this.formatDateTime(t.timeTill):"",onChange:function(n){t.timeTill=e.getDateTimeValue(n)},onBlur:function(){return t.applyTimeTill()},onKeyPress:this.handleKeyPress}),r.createElement(u.a,{width:50}),r.createElement(D.a,{className:"filter-value-input",label:"Filter Value",InputLabelProps:{shrink:!0},placeholder:"[some text or 'null']",disabled:"0"===t.filteredColumn,value:t.filterValue,onChange:function(e){return t.filterValue=e.target.value},onBlur:function(){return t.applyFilterValue()},onKeyPress:this.handleKeyPress}),r.createElement(u.a,{width:50}),r.createElement(h.a,{style:{flex:1}}),r.createElement(g.a,{className:"refresh-button",variant:"outlined",color:"default",size:"large",onClick:function(){return t.reloadOrchestrations()}},r.createElement(re.a,null))),r.createElement(Y.a,{className:"items-count-label"},t.orchestrations.length?t.orchestrations.length+" items shown":""),t.orchestrations.length?this.renderTable(t):this.renderEmptyTable(),t.inProgress&&t.orchestrations.length?r.createElement(I.a,null):r.createElement(u.a,{height:4}),r.createElement(p.a,{variant:"dense"}),r.createElement(B,{state:this.props.state}))},t.prototype.renderEmptyTable=function(){return r.createElement(h.a,{variant:"h5",className:"empty-table-placeholder"},"This list is empty")},t.prototype.renderTable=function(e){return r.createElement($.a,{size:"small"},r.createElement(G.a,null,r.createElement(Q.a,null,ie.map(function(t){return r.createElement(Z.a,{key:t},r.createElement(X.a,{active:e.orderBy===t,direction:e.orderByDirection,onClick:function(){return e.orderBy=t}},t))}))),r.createElement(ee.a,null,e.orchestrations.map(function(t){var n={verticalAlign:"top"};return r.createElement(Q.a,{key:t.instanceId,className:"runtime-status-"+t.runtimeStatus.toLowerCase()},r.createElement(Z.a,{className:"instance-id-cell",style:n},r.createElement(le,{orchestrationId:t.instanceId,backendClient:e.backendClient})),r.createElement(Z.a,{className:"name-cell",style:n},t.name),r.createElement(Z.a,{className:"datetime-cell",style:n},t.createdTime),r.createElement(Z.a,{className:"datetime-cell",style:n},t.lastUpdatedTime),r.createElement(Z.a,{style:n},t.runtimeStatus),r.createElement(Z.a,{className:"long-text-cell",style:n},r.createElement(te.a,{className:"long-text-cell-input",multiline:!0,fullWidth:!0,rowsMax:5,readOnly:!0,value:JSON.stringify(t.input)})),r.createElement(Z.a,{className:"long-text-cell",style:n},r.createElement(te.a,{className:"long-text-cell-input",multiline:!0,fullWidth:!0,rowsMax:5,readOnly:!0,value:JSON.stringify(t.output)})),r.createElement(Z.a,{style:n},t.customStatus))})))},t.prototype.handleKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),this.props.state.reloadOrchestrations())},t.prototype.getDateTimeValue=function(e){var t=new Date(e.target.value.slice(0,16)+":00Z");try{t.toISOString()}catch(n){t=new Date}return t},t.prototype.formatDateTime=function(e){return e.toISOString().slice(0,16)},s.b([M.d.bound],t.prototype,"handleKeyPress",null),t=s.b([c.a],t)}(r.Component),ce=n(222),ue=(n(145),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.componentDidMount=function(){this.props.state.loadDetails()},t.prototype.render=function(){var e=this.props.state;return r.createElement("div",null,e.inProgress?r.createElement(I.a,null):r.createElement(u.a,{height:4}),r.createElement(p.a,{variant:"dense",className:"top-toolbar"},r.createElement(g.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return e.rewindConfirmationOpen=!0}},"Rewind"),r.createElement(u.a,{width:20}),r.createElement(g.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return e.terminateConfirmationOpen=!0}},"Terminate"),r.createElement(u.a,{width:20}),r.createElement(g.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return e.raiseEventDialogOpen=!0}},"Raise Event"),r.createElement(u.a,{width:20}),r.createElement(h.a,{style:{flex:1}}),r.createElement(H.a,null,r.createElement(J.a,{htmlFor:"auto-refresh-select"},"Auto-refresh"),r.createElement(K.a,{className:"toolbar-select",value:e.autoRefresh,onChange:function(t){return e.autoRefresh=t.target.value},inputProps:{id:"auto-refresh-select"}},r.createElement(E.a,{value:0},"Never"),r.createElement(E.a,{value:1},"Every 1 sec."),r.createElement(E.a,{value:5},"Every 5 sec."),r.createElement(E.a,{value:10},"Every 10 sec."))),r.createElement(u.a,{width:20}),r.createElement(g.a,{className:"refresh-button",variant:"outlined",color:"default",size:"large",onClick:function(){return e.loadDetails()}},r.createElement(re.a,null))),this.renderDetails(e.details),r.createElement(Y.a,{className:"history-events-count-label"},"historyEvents: ",e.details.historyEvents?e.details.historyEvents.length:0," items"),e.details.historyEvents&&e.details.historyEvents.length?this.renderTable(e.details.historyEvents):this.renderEmptyTable(),e.inProgress?r.createElement(I.a,null):r.createElement(u.a,{height:4}),r.createElement(u.a,{height:10}),r.createElement(B,{state:this.props.state}),this.renderDialogs(e))},t.prototype.renderDialogs=function(e){return r.createElement("div",null,r.createElement(b.a,{open:e.rewindConfirmationOpen,onClose:function(){return e.rewindConfirmationOpen=!1}},r.createElement(N.a,null,"Confirm Rewind"),r.createElement(_.a,null,r.createElement(O.a,null,"You're about to rewind orchestration '",e.orchestrationId,"'. Are you sure?")),r.createElement(A.a,null,r.createElement(g.a,{onClick:function(){return e.rewindConfirmationOpen=!1},color:"primary",autoFocus:!0},"Cancel"),r.createElement(g.a,{onClick:function(){return e.rewind()},color:"secondary"},"Yes, rewind"))),r.createElement(b.a,{open:e.terminateConfirmationOpen,onClose:function(){return e.terminateConfirmationOpen=!1}},r.createElement(N.a,null,"Confirm Terminate"),r.createElement(_.a,null,r.createElement(O.a,null,"You're about to terminate orchestration '",e.orchestrationId,"'. This operation cannot be undone. Are you sure?")),r.createElement(A.a,null,r.createElement(g.a,{onClick:function(){return e.terminateConfirmationOpen=!1},color:"primary",autoFocus:!0},"Cancel"),r.createElement(g.a,{onClick:function(){return e.terminate()},color:"secondary"},"Yes, terminate"))),r.createElement(b.a,{open:e.raiseEventDialogOpen,onClose:function(){return e.raiseEventDialogOpen=!1}},r.createElement(N.a,null,"Raise Event"),r.createElement(_.a,null,r.createElement(O.a,null,"Provide event name and some additional data."),r.createElement(D.a,{autoFocus:!0,margin:"dense",label:"Event Name",fullWidth:!0,value:e.eventName,onChange:function(t){return e.eventName=t.target.value}}),r.createElement(D.a,{margin:"dense",label:"Event Data (JSON)",fullWidth:!0,multiline:!0,rows:7,value:e.eventData,onChange:function(t){return e.eventData=t.target.value}})),r.createElement(A.a,null,r.createElement(g.a,{onClick:function(){return e.raiseEventDialogOpen=!1},color:"primary"},"Cancel"),r.createElement(g.a,{onClick:function(){return e.raiseEvent()},disabled:!e.eventName,color:"secondary"},"Raise"))))},t.prototype.renderDetails=function(e){return r.createElement(ce.a,{container:!0,className:"grid-container"},r.createElement(ce.a,{item:!0,xs:12,sm:12,md:3,zeroMinWidth:!0,className:"grid-item"},r.createElement(D.a,{label:"name",value:e.name,margin:"normal",InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})),r.createElement(ce.a,{item:!0,xs:12,sm:6,md:2,zeroMinWidth:!0,className:"grid-item"},r.createElement(D.a,{label:"createdTime",value:e.createdTime,margin:"normal",InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})),r.createElement(ce.a,{item:!0,xs:12,sm:6,md:2,zeroMinWidth:!0,className:"grid-item"},r.createElement(D.a,{label:"lastUpdatedTime",value:e.lastUpdatedTime,margin:"normal",InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})),r.createElement(ce.a,{item:!0,xs:12,sm:6,md:2,zeroMinWidth:!0,className:"grid-item"},r.createElement(D.a,{label:"runtimeStatus",value:e.runtimeStatus,margin:"normal",InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0,className:e.runtimeStatus?"runtime-status-"+e.runtimeStatus.toLowerCase():""})),r.createElement(ce.a,{item:!0,xs:12,sm:6,md:3,zeroMinWidth:!0,className:"grid-item"},r.createElement(D.a,{label:"customStatus",value:e.customStatus?e.customStatus:"",margin:"normal",InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})),r.createElement(ce.a,{item:!0,xs:12,zeroMinWidth:!0,className:"grid-item"},r.createElement(D.a,{label:"input",value:JSON.stringify(e.input),margin:"normal",InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0,multiline:!0,rowsMax:5})),r.createElement(ce.a,{item:!0,xs:12,zeroMinWidth:!0,className:"grid-item"},r.createElement(D.a,{label:"output",value:JSON.stringify(e.output),margin:"normal",InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0,multiline:!0,rowsMax:5})))},t.prototype.renderEmptyTable=function(){return r.createElement(h.a,{variant:"h5",className:"empty-table-placeholder"},"This list is empty")},t.prototype.renderTable=function(e){return r.createElement($.a,{size:"small"},r.createElement(G.a,null,r.createElement(Q.a,null,oe.map(function(e){return r.createElement(Z.a,{key:e},e)}))),r.createElement(ee.a,null,e.map(function(e,t){var n={verticalAlign:"top"};return r.createElement(Q.a,{key:t},r.createElement(Z.a,{style:n},e.Timestamp),r.createElement(Z.a,{style:n},e.EventType),r.createElement(Z.a,{className:"name-cell",style:n},e.Name?e.Name:e.FunctionName),r.createElement(Z.a,{style:n},e.ScheduledTime),r.createElement(Z.a,{className:"long-text-cell",style:n},r.createElement(te.a,{className:"long-text-cell-input",multiline:!0,fullWidth:!0,rowsMax:5,readOnly:!0,value:JSON.stringify(e.Result)})),r.createElement(Z.a,{className:"long-text-cell",style:n},r.createElement(te.a,{className:"long-text-cell-input",multiline:!0,fullWidth:!0,rowsMax:5,readOnly:!0,value:e.Details})))})))},t=s.b([c.a],t)}(r.Component)),me=n(115),pe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){var e=this.props.state;return r.createElement("div",null,!e.loginState&&r.createElement(u.a,{height:20}),!!e.loginState&&r.createElement(m.a,{position:"static",color:"default",className:"app-bar"},r.createElement(p.a,null,e.loginState.isLoggedIn&&!!e.mainMenuState&&r.createElement(q,{state:e.mainMenuState}),r.createElement("img",{src:me,width:"30px"}),r.createElement(u.a,{width:5}),r.createElement(h.a,{variant:"h6",color:"inherit",className:"title-typography"},"Durable Functions Monitor"),r.createElement(d.a,{color:"inherit"},r.createElement(f.a,{color:"inherit",href:"/api/monitor"},"/ orchestrations"),!!e.orchestrationDetailsState&&r.createElement(h.a,{color:"inherit"},e.orchestrationDetailsState.orchestrationId)),r.createElement(h.a,{style:{flex:1}}),r.createElement(w,{state:e.loginState}))),!!e.orchestrationsState&&(!e.loginState||e.loginState.isLoggedIn)&&r.createElement(se,{state:e.orchestrationsState}),!!e.orchestrationDetailsState&&(!e.loginState||e.loginState.isLoggedIn)&&r.createElement(ue,{state:e.orchestrationDetailsState}))},t=s.b([c.a],t)}(r.Component),he=n(63),de=n.n(he),fe=function(){function e(e){this._getAuthorizationHeaderAsync=e}return Object.defineProperty(e.prototype,"isVsCode",{get:function(){return!1},enumerable:!0,configurable:!0}),e.prototype.call=function(e,t,n){var r=this;return new Promise(function(o,a){r._getAuthorizationHeaderAsync().then(function(r){de.a.request({url:"/api"+t,method:e,data:n,headers:r}).then(function(e){o(e.data)},a)})})},e}(),ge=n(98),ye=function(){function e(){this.errorMessage=""}return s.b([M.l],e.prototype,"errorMessage",void 0),e}(),ve=function(e){function t(){var t=e.call(this)||this;return t._isLoggedIn=!1,t.login(),t}return s.c(t,e),Object.defineProperty(t.prototype,"isLoggedIn",{get:function(){return this._isLoggedIn},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isLoggedInAnonymously",{get:function(){return!this._userName},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"userName",{get:function(){return this._userName},enumerable:!0,configurable:!0}),t.prototype.login=function(){var e=this;de.a.get("/api/easyauth-config").then(this.loginWithEasyAuthConfig,function(t){e.errorMessage=t.message+"."+(t.response?t.response.data:"")})},t.prototype.logout=function(){this.menuAnchorElement=void 0,this._aadApp.logout()},t.prototype.getAuthorizationHeaderAsync=function(){var e=this;return this._aadApp?new Promise(function(t,n){var r={scopes:[e._aadApp.getCurrentConfiguration().auth.clientId]};e._aadApp.acquireTokenSilent(r).then(function(e){var n=e.accessToken;n||(console.log("DFM: accessToken is null, so using idToken.rawIdToken instead"),n=e.idToken.rawIdToken),t({Authorization:"Bearer "+n})},function(t){console.log("DFM: acquireTokenSilent() failed ("+t+"), so calling acquireTokenRedirect()..."),e._aadApp.acquireTokenRedirect(r)})}):new Promise(function(e,t){return e()})},t.prototype.loginWithEasyAuthConfig=function(e){var t=e.data;if(t.clientId){this._aadApp=new ge.a({auth:{clientId:t.clientId,authority:t.authority}}),this._aadApp.handleRedirectCallback(function(){},this.handleRedirectCallbackFailed);var n=this._aadApp.getAccount();n?(this._userName=n.userName,this._isLoggedIn=!0):(console.log("DFM: redirecting user to AAD for login..."),this._aadApp.loginRedirect())}else this._isLoggedIn=!0},t.prototype.handleRedirectCallbackFailed=function(e,t){this.errorMessage="Failed to handle login redirect. name: "+e.name+", message: "+e.message+", errorCode: "+e.errorCode+", errorMessage: "+e.errorMessage+", accountState: "+t},s.b([M.e],t.prototype,"isLoggedIn",null),s.b([M.e],t.prototype,"isLoggedInAnonymously",null),s.b([M.e],t.prototype,"userName",null),s.b([M.l],t.prototype,"menuAnchorElement",void 0),s.b([M.d.bound],t.prototype,"getAuthorizationHeaderAsync",null),s.b([M.l],t.prototype,"_isLoggedIn",void 0),s.b([M.l],t.prototype,"_userName",void 0),s.b([M.d.bound],t.prototype,"loginWithEasyAuthConfig",null),s.b([M.d.bound],t.prototype,"handleRedirectCallbackFailed",null),t}(ye),Ee=function(e){function t(t){var n=e.call(this)||this;return n._backendClient=t,n.connectionParamsDialogOpen=!1,n._inProgress=!1,n}return s.c(t,e),Object.defineProperty(t.prototype,"inProgress",{get:function(){return this._inProgress},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isConnectionStringReadonly",{get:function(){return!this._oldConnectionString},enumerable:!0,configurable:!0}),t.prototype.showConnectionParamsDialog=function(){var e=this;this.menuAnchorElement=void 0,this.connectionParamsDialogOpen=!0,this._inProgress=!0,this._backendClient.call("GET","/manage-connection").then(function(t){e.connectionString=t.connectionString,e._oldConnectionString=e.connectionString,e.hubName=t.hubName},function(t){e.errorMessage="Load failed: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})},t.prototype.saveConnectionParams=function(){var e=this;this._inProgress=!0,this._backendClient.call("PUT","/manage-connection",{connectionString:this.connectionString,hubName:this.hubName}).then(function(){e.connectionParamsDialogOpen=!1,e._oldConnectionString!==e.connectionString?alert("You've changed the Connection String, and the new value cannot currently be picked up automatically. Please, restart the Function Host."):location.reload()},function(t){e.errorMessage="Save failed: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})},s.b([M.l],t.prototype,"menuAnchorElement",void 0),s.b([M.l],t.prototype,"hubName",void 0),s.b([M.l],t.prototype,"connectionString",void 0),s.b([M.l],t.prototype,"connectionParamsDialogOpen",void 0),s.b([M.e],t.prototype,"inProgress",null),s.b([M.e],t.prototype,"isConnectionStringReadonly",null),s.b([M.l],t.prototype,"_inProgress",void 0),s.b([M.l],t.prototype,"_oldConnectionString",void 0),t}(ye);!function(e){e[e.Equals=0]="Equals",e[e.StartsWith=1]="StartsWith",e[e.Contains=2]="Contains"}(l||(l={}));var be=function(e){function t(t,n){var r,o=e.call(this)||this;o._backendClient=t,o._localStorage=n,o._inProgress=!1,o._orchestrations=[],o._orderByDirection="asc",o._orderBy="",o._autoRefresh=0,o._filterValue="",o._filterOperator=l.Equals,o._filteredColumn="0",o._noMorePagesToLoad=!1,o._pageSize=50,o._oldFilterValue="";var a=o._localStorage.getItem("timeFrom");a?r=new Date(a):(r=new Date).setDate(r.getDate()-1),o._timeFrom=r;var i=o._localStorage.getItem("timeTill");i&&(o._timeTill=new Date(i));var s=o._localStorage.getItem("filteredColumn");s&&(o._filteredColumn=s);var c=o._localStorage.getItem("filterOperator");c&&(o._filterOperator=l[c]);var u=o._localStorage.getItem("filterValue");u&&(o._filterValue=u);var m=o._localStorage.getItem("autoRefresh");return m&&(o._autoRefresh=Number(m)),o}return s.c(t,e),Object.defineProperty(t.prototype,"inProgress",{get:function(){return this._inProgress},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"orchestrations",{get:function(){return this._orchestrations},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoRefresh",{get:function(){return this._autoRefresh},set:function(e){this._autoRefresh=e,this._localStorage.setItem("autoRefresh",this._autoRefresh.toString()),this.loadOrchestrations(!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeFrom",{get:function(){return this._timeFrom},set:function(e){this._timeFrom=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeTill",{get:function(){return this._timeTill?this._timeTill:new Date},set:function(e){this._timeTill=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeTillEnabled",{get:function(){return!!this._timeTill},set:function(e){this._timeTill=e?new Date:void 0,e||this.reloadOrchestrations()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"orderByDirection",{get:function(){return this._orderByDirection},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"orderBy",{get:function(){return this._orderBy},set:function(e){this._orderBy!==e?this._orderBy=e:this._orderByDirection="desc"===this._orderByDirection?"asc":"desc",this.reloadOrchestrations()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filterValue",{get:function(){return this._filterValue},set:function(e){this._filterValue=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filterOperator",{get:function(){return this._filterOperator},set:function(e){this._filterOperator=e,this._filterValue&&"0"!==this._filteredColumn&&this.reloadOrchestrations()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filteredColumn",{get:function(){return this._filteredColumn},set:function(e){this._filteredColumn=e,this._filterValue&&("0"===this._filteredColumn&&(this._filterValue=""),this.reloadOrchestrations())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"backendClient",{get:function(){return this._backendClient},enumerable:!0,configurable:!0}),t.prototype.applyTimeFrom=function(){this._oldTimeFrom!==this._timeFrom&&this.reloadOrchestrations()},t.prototype.applyTimeTill=function(){this._oldTimeTill!==this._timeTill&&this.reloadOrchestrations()},t.prototype.applyFilterValue=function(){this._oldFilterValue!==this._filterValue&&this.reloadOrchestrations()},t.prototype.reloadOrchestrations=function(){this._orchestrations=[],this._noMorePagesToLoad=!1,this._localStorage.setItems([{fieldName:"timeFrom",value:this._timeFrom.toISOString()},{fieldName:"timeTill",value:this._timeTill?this._timeTill.toISOString():null},{fieldName:"timeFrom",value:this._timeFrom.toISOString()},{fieldName:"filteredColumn",value:this._filteredColumn},{fieldName:"filterOperator",value:l[this._filterOperator]},{fieldName:"filterValue",value:this._filterValue?this._filterValue:null}]),this.loadOrchestrations(),this._oldFilterValue=this._filterValue,this._oldTimeFrom=this._timeFrom,this._oldTimeTill=this._timeTill},t.prototype.loadOrchestrations=function(e){var t=this;if(void 0===e&&(e=!1),!(this.inProgress||this._noMorePagesToLoad&&!this._autoRefresh)){this._inProgress=!0;var n=e?0:this._orchestrations.length,r=this._timeTill?this._timeTill:new Date,o="&$filter=createdTime ge '"+this._timeFrom.toISOString()+"' and createdTime le '"+r.toISOString()+"'";if(this._filterValue&&"0"!==this._filteredColumn)switch(o+=" and ",this._filterOperator){case l.Equals:o+=this._filteredColumn+" eq '"+this._filterValue+"'";break;case l.StartsWith:o+="startswith("+this._filteredColumn+", '"+this._filterValue+"')";break;case l.Contains:o+="contains("+this._filteredColumn+", '"+this._filterValue+"')"}var a=this._orderBy?"&$orderby="+this._orderBy+" "+this.orderByDirection:"",i="/orchestrations?$top="+this._pageSize+"&$skip="+n+o+a;this._backendClient.call("GET",i).then(function(n){var r;n.length?e?t._orchestrations=n:(r=t._orchestrations).push.apply(r,n):t._noMorePagesToLoad=!0,t._autoRefresh&&(t._autoRefreshToken&&clearTimeout(t._autoRefreshToken),t._autoRefreshToken=setTimeout(function(){return t.loadOrchestrations(!0)},1e3*t._autoRefresh))},function(e){t._autoRefresh=0,t.errorMessage="Load failed: "+e.message+"."+(e.response?e.response.data:"")+" "}).finally(function(){t._inProgress=!1})}},s.b([M.e],t.prototype,"inProgress",null),s.b([M.e],t.prototype,"orchestrations",null),s.b([M.e],t.prototype,"autoRefresh",null),s.b([M.e],t.prototype,"timeFrom",null),s.b([M.e],t.prototype,"timeTill",null),s.b([M.e],t.prototype,"timeTillEnabled",null),s.b([M.e],t.prototype,"orderByDirection",null),s.b([M.e],t.prototype,"orderBy",null),s.b([M.e],t.prototype,"filterValue",null),s.b([M.e],t.prototype,"filterOperator",null),s.b([M.e],t.prototype,"filteredColumn",null),s.b([M.l],t.prototype,"_inProgress",void 0),s.b([M.l],t.prototype,"_orchestrations",void 0),s.b([M.l],t.prototype,"_orderByDirection",void 0),s.b([M.l],t.prototype,"_orderBy",void 0),s.b([M.l],t.prototype,"_autoRefresh",void 0),s.b([M.l],t.prototype,"_timeFrom",void 0),s.b([M.l],t.prototype,"_timeTill",void 0),s.b([M.l],t.prototype,"_filterValue",void 0),s.b([M.l],t.prototype,"_filterOperator",void 0),s.b([M.l],t.prototype,"_filteredColumn",void 0),t}(ye),_e=function(e){function t(t,n,r){var o=e.call(this)||this;o._orchestrationId=t,o._backendClient=n,o._localStorage=r,o.details=new ae,o.rewindConfirmationOpen=!1,o.terminateConfirmationOpen=!1,o._inProgress=!1,o._sendEventDialogOpen=!1,o._autoRefresh=0;var a=o._localStorage.getItem("autoRefresh");return a&&(o._autoRefresh=Number(a)),o}return s.c(t,e),Object.defineProperty(t.prototype,"orchestrationId",{get:function(){return this._orchestrationId},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inProgress",{get:function(){return this._inProgress},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoRefresh",{get:function(){return this._autoRefresh},set:function(e){this._autoRefresh=e,this._localStorage.setItem("autoRefresh",this._autoRefresh.toString()),this.loadDetails()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"raiseEventDialogOpen",{get:function(){return this._sendEventDialogOpen},set:function(e){this._sendEventDialogOpen=e,this.eventName="",this.eventData=""},enumerable:!0,configurable:!0}),t.prototype.rewind=function(){var e=this;this.rewindConfirmationOpen=!1;var t="/orchestrations('"+this._orchestrationId+"')/rewind";this._inProgress=!0,this._backendClient.call("POST",t).then(function(){e.loadDetails()},function(t){e.errorMessage="Failed to rewind: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})},t.prototype.terminate=function(){var e=this;this.terminateConfirmationOpen=!1;var t="/orchestrations('"+this._orchestrationId+"')/terminate";this._inProgress=!0,this._backendClient.call("POST",t).then(function(){e.loadDetails()},function(t){e.errorMessage="Failed to terminate: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})},t.prototype.raiseEvent=function(){var e=this,t="/orchestrations('"+this._orchestrationId+"')/raise-event",n={name:this.eventName,data:null};try{n.data=JSON.parse(this.eventData)}catch(r){return void(this.errorMessage="Event Data failed to parse: "+r.message)}finally{this.raiseEventDialogOpen=!1}this._inProgress=!0,this._backendClient.call("POST",t,n).then(function(){e.loadDetails()},function(t){e.errorMessage="Failed to raise an event: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})},t.prototype.loadDetails=function(){var e=this;if(!this.inProgress){this._inProgress=!0;var t="/orchestrations('"+this._orchestrationId+"')";this._backendClient.call("GET",t).then(function(t){if(!t)return e.errorMessage="Orchestration '"+e._orchestrationId+"' not found.",void(e._autoRefresh=0);e.details=t,e._autoRefresh&&(e._autoRefreshToken&&clearTimeout(e._autoRefreshToken),e._autoRefreshToken=setTimeout(function(){return e.loadDetails()},1e3*e._autoRefresh))},function(t){e._autoRefresh=0,e.errorMessage="Load failed: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})}},s.b([M.e],t.prototype,"orchestrationId",null),s.b([M.e],t.prototype,"inProgress",null),s.b([M.e],t.prototype,"autoRefresh",null),s.b([M.e],t.prototype,"raiseEventDialogOpen",null),s.b([M.l],t.prototype,"rewindConfirmationOpen",void 0),s.b([M.l],t.prototype,"terminateConfirmationOpen",void 0),s.b([M.l],t.prototype,"eventName",void 0),s.b([M.l],t.prototype,"eventData",void 0),s.b([M.l],t.prototype,"_inProgress",void 0),s.b([M.l],t.prototype,"_sendEventDialogOpen",void 0),s.b([M.l],t.prototype,"_autoRefresh",void 0),t}(ye),Ce=function(){function e(e){this._prefix=e}return e.prototype.setItem=function(e,t){localStorage.setItem(this._prefix+"::"+e,t)},e.prototype.setItems=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];null===r.value?localStorage.removeItem(this._prefix+"::"+r.fieldName):localStorage.setItem(this._prefix+"::"+r.fieldName,r.value)}},e.prototype.getItem=function(e){return localStorage.getItem(this._prefix+"::"+e)},e.prototype.removeItem=function(e){localStorage.removeItem(this._prefix+"::"+e)},e}(),Se=function(){function e(e){var t=this;this._vsCodeApi=e,this._requests={},window.addEventListener("message",function(e){var n=e.data,r=t._requests[n.id];r&&(n.data?r.resolve(n.data):r.reject(n.err),delete t._requests[n.id])})}return Object.defineProperty(e.prototype,"isVsCode",{get:function(){return!0},enumerable:!0,configurable:!0}),e.prototype.call=function(e,t,n){var r=this,o=Math.random().toString();return this._vsCodeApi.postMessage({id:o,method:e,url:t,data:n}),new Promise(function(e,t){r._requests[o]={resolve:e,reject:t}})},e}(),Oe=function(){function e(t,n){this._prefix=t,this._vsCodeApi=n;var r=this._vsCodeApi.getState();e.State=r||{}}return e.prototype.setItem=function(t,n){e.State[this._prefix+"::"+t]=n,this._vsCodeApi.setState(e.State)},e.prototype.setItems=function(t){for(var n=0,r=t;n<r.length;n++){var o=r[n];null===o.value?delete e.State[this._prefix+"::"+o.fieldName]:e.State[this._prefix+"::"+o.fieldName]=o.value}this._vsCodeApi.setState(e.State)},e.prototype.getItem=function(t){return e.State[this._prefix+"::"+t]},e.prototype.removeItem=function(t){delete e.State[this._prefix+"::"+t],this._vsCodeApi.setState(e.State)},e.State={},e}(),Pe=new(function(){function e(){var e=void 0;try{e=acquireVsCodeApi()}catch(n){}if(e){var t=new Se(e);this.orchestrationId?this.orchestrationDetailsState=new _e(this.orchestrationId,t,new Oe("OrchestrationDetailsState",e)):this.orchestrationsState=new be(t,new Oe("OrchestrationsState",e))}else{this.loginState=new ve;t=new fe(this.loginState.getAuthorizationHeaderAsync);this.orchestrationId?this.orchestrationDetailsState=new _e(this.orchestrationId,t,new Ce("OrchestrationDetailsState")):(this.mainMenuState=new Ee(t),this.orchestrationsState=new be(t,new Ce("OrchestrationsState")))}}return Object.defineProperty(e.prototype,"orchestrationId",{get:function(){if(OrchestrationIdFromVsCode)return OrchestrationIdFromVsCode;var e="/api/monitor/orchestrations/";return window.location.pathname.startsWith(e)?window.location.pathname.substr(e.length):""},enumerable:!0,configurable:!0}),e}());o.render(r.createElement(pe,{state:Pe}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/api/monitor",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="/api/monitor/service-worker.js";a?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):i(e)})}}()}},[[106,2,1]]]);
//# sourceMappingURL=main.90491890.chunk.js.map