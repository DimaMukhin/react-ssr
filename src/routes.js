import Home from './containers/Home';
import News from './containers/News';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/news',
        component: News
    }
];

export default routes;