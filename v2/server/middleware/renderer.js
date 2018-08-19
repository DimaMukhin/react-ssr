import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

// import our main App component
import App from '../../src/App';
import manifest from '../../build/asset-manifest.json';

const path = require("path");
const fs = require("fs");
import { Provider as ReduxProvider } from 'react-redux';

const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

export default (store) => (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve('build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const modules = [];

        // render the app as a string
        const html = ReactDOMServer.renderToString(
            <Loadable.Capture report={m => modules.push(m)}>
                <ReduxProvider store={store}>
                    <StaticRouter location={req.baseUrl} context={{}}>
                        <App />
                    </StaticRouter>
                </ReduxProvider>
            </Loadable.Capture>
        );

        const extraChunks = extractAssets(manifest, modules)
            .map(c => `<script type="text/javascript" src="/${c}"></script>`);

        const reduxState = JSON.stringify(store.getState());

        // inject the rendered app into our html and send it
        return res.send(
            htmlData
                .replace(
                    '<div id="root"></div>',
                    `<div id="root">${html}</div>`
                )
                .replace(
                    '</body>',
                    extraChunks.join('') + '</body>'
                )
                .replace('"__SERVER_REDUX_STATE__"', reduxState)
        );
    });
}