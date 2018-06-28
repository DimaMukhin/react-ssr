# React Server Side Rendering with Server Side Async Fetch

This project is a very simple POC that shows how Server Side Rendered React applications work with Server Side Async Fetch.

## Why fetch data on the server?

Fetching data on the server improves SEO by providing the client HTML that contains fetched data

## The challenges of SSR + Server Side Async Fetch

* React's Fetch library cannot be used on the server
* Server has to somehow know what data needs to be fetched and where to get it
* Need to somehow transfer the fetched data from the server to the client (state between server and client must match)

## Getting Started

* run `npm install` to install dependencies
* run `npm run build` to build the project. The server will use the build files for SSR
* run `npm run start:server` to start the server
* run `npm run start:api` to start the api
