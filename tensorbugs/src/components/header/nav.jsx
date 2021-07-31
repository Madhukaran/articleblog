import React from 'react';
import { MDCTopAppBar } from '@material/top-app-bar';
import './nav.scss';


export default class Mynav extends React.Component {
    render() {
        return (
            <header class="mdc-top-app-bar">
                <div class="mdc-top-app-bar__row">
                    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Close">close</button>
                        <span class="mdc-top-app-bar__title">Contextual title</span>
                    </section>
                    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Share">share</button>
                        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Delete">delete</button>
                        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Open menu">more_vert</button>
                    </section>
                </div>
            </header>
        );
    }
}