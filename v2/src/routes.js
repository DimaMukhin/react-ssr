import HomePage from './containers/HomePage';
import PostsPage from './containers/PostsPage';

const routes = [
    {
        path: "/",
        component: HomePage,
        exact: true
    },
    {
        path: "/posts",
        component: PostsPage
    }
];

export default routes;