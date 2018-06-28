import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import fetch from 'isomorphic-fetch';

import App from "../src/App";
import routes from '../src/routes';

const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
    const currentRoute = routes.find(route => matchPath(req.url, route));
    const requestInitialData = currentRoute.component.requestInitialData && currentRoute.component.requestInitialData();

    Promise.resolve(requestInitialData).then((initialData) => {
        console.log(initialData);
        const context = { initialData };
        const markup = renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                    <meta name="theme-color" content="#000000">
                    
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
                    <link rel="shortcut icon" href="/favicon.ico">
                    <title>React App</title>

                    <script>window.__initialData__ = ${serialize(initialData)} </script>
                </head>
                <body>
                    <noscript>
                        You need to enable JavaScript to run this app.
                    </noscript>
                    <div id="root">${markup}</div>
                    <script type="text/javascript" src="/static/js/main.js"></script>
                </body>
            </html>
        `);
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening");
});