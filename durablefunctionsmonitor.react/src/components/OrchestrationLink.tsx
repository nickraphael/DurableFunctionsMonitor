import * as React from 'react';
import { action } from 'mobx'
import { observer } from 'mobx-react';

import { Link } from '@material-ui/core';

import { IBackendClient } from '../services/IBackendClient';

export const UriSuffix = process.env.REACT_APP_URI_SUFFIX as string;

// Renders a link to be opened either in a new browser tab or in a new VsCode WebView
@observer
export class OrchestrationLink extends React.Component<{ orchestrationId: string, backendClient: IBackendClient }> {

    render(): JSX.Element {

        if (this.props.backendClient.isVsCode) {

            return (
                <Link href="#" onClick={this.onLinkClicked} >
                    {this.props.orchestrationId}
                </Link>
            );            
        } else {

            return (
                <Link href={`${UriSuffix}/orchestrations/${this.props.orchestrationId}`} target="_blank">
                    {this.props.orchestrationId}
                </Link>
            );
        }
    }

    @action.bound
    private onLinkClicked() {
        this.props.backendClient.call('OpenInNewWindow', this.props.orchestrationId);
    }
}