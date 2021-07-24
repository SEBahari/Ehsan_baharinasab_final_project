import React from 'react';
const Main = React.lazy(() => import('../Layouts/Main.layout'));
const Dashboard = React.lazy(() => import('../Layouts/Dashboard.layout'));
const Cart = React.lazy(() => import('../Layouts/Cart.layout'));

const routes = [
   { path: '/dashboard', exact: false, Component: Dashboard, title: 'Dashboard', isPrivate: true },
   { path: '/cart', exact: false, Component: Cart, title: 'Cart', isPrivate: true },
   { path: '', exact: false, Component: Main, title: 'Main', isPrivate: false },
];

export default routes;