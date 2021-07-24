import React from 'react';
const Main = React.lazy(() => import('../Layouts/Main/Main.layout'));
const Dashboard = React.lazy(() => import('../Layouts/Dashboard/Dashboard.layout'));

const routes = [
   { path: '/', exact: true, Component: Main, title: 'Main', isPrivate: false },
   { path: '/dashboard', exact: true, Component: Dashboard, title: 'Dashboard', isPrivate: true },
];

export default routes;