import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import fetch from 'isomorphic-fetch';

import App from "../src/App";

const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
    fetch('http://localhost:3004/news').then((data) => {
        return data.json();
    }).then((initialData) => {
        const markup = renderToString(<App initialData={initialData} />);

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

                    <script>window.__initialData__ = ${JSON.stringify(initialData)} </script>
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