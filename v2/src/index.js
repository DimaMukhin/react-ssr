import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker, { unregister } from './registerServiceWorker';

import configureStore from './store';
const serverReduxState = (window.REDUX_STATE && window.REDUX_STATE !== "__SERVER_REDUX_STATE__") ? window.REDUX_STATE : {};
const store = configureStore(serverReduxState);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            <ReduxProvider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ReduxProvider>,
            document.getElementById('root')
        );
    });
};

unregister();
