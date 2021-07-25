import { lazy } from 'react';

const Charts = lazy(() => import('../Pages/Dashboard/Charts.page'));
const Tables = lazy(() => import('../Pages/Dashboard/Tables.page'));
const Dashboard = lazy(() => import('../Pages/Dashboard/Dashboard.page'));

const routes = [
   { path: 'charts/', exact: false, tilte: 'Charts', Component: Charts, isPrivate: true },
   { path: 'tables/', exact: false, tilte: 'Tables', Component: Tables, isPrivate: true },
   { path: '', exact: false, tilte: 'Dashboard', Component: Dashboard, isPrivate: true },
];

export default routes;