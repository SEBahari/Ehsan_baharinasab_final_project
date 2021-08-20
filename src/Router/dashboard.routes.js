import { lazy } from "react";

const Products = lazy(() => import("../Pages/Dashboard/Products/Products.page"));
const Quantity = lazy(() => import("../Pages/Dashboard/Quantity/Quantity.page"));
const Orders = lazy(() => import("../Pages/Dashboard/Orders/Orders.page"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard/Dashboard.page"));

const routes = [
  { path: "products/", exact: false, tilte: "Tables", Component: Products, isPrivate: true },
  { path: "quantity/", exact: false, tilte: "Tables", Component: Quantity, isPrivate: true },
  { path: "orders/", exact: false, tilte: "Tables", Component: Orders, isPrivate: true },
  { path: "", exact: false, tilte: "Dashboard", Component: Dashboard, isPrivate: true },
];
console.log('test');

export default routes;