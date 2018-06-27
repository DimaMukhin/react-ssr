import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import App from "../src/App";

const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
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
                <div id="root">${renderToString(<App />)}</div>
                <script type="text/javascript" src="/static/js/main.js"></script>
            </body>
        </html>
  
  `);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening");
});