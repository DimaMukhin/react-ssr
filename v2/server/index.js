import express from 'express';
import Loadable from 'react-loadable';

import configureStore from '../src/store';

// we'll talk about this in a minute:
import serverRenderer from './middleware/renderer';
import { setMessage } from '../src/actions/messageActions';

const PORT = process.env.PORT || 3000;

// initialize the application and create the routes
const app = express();

const store = configureStore();
store.dispatch(setMessage('Hi I am from server!'));

// root (/) should always serve our server rendered page
app.use('^/$', serverRenderer(store));

// other static resources should just be served as they are
app.use(express.static('build', { maxAge: '30d' }));

// all other routes should be rendered based on the route
app.use('*', serverRenderer(store));

// start the app
Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
        if (error) {
            return console.log('something bad happened', error);
        }

        console.log("listening on " + PORT + "...");
    });
});
