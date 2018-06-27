import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import React from 'react';
import serialize from 'serialize-javascript';

import App from '../src/App';

const app = express();

app.use(cors());

app.use(express.static('build'));

app.get('*', (req, res, next) => {
    const markup = renderToString(
        <App />
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
        </head>
        <body>
            <noscript>
                You need to enable JavaScript to run this app.
            </noscript>
            <div id="root">${markup}</div>
            <script type="text/javascript" src="/static/js/main.dff2ec20.js"></script>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});