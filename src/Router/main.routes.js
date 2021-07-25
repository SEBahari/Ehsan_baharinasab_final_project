import React from "react";
const Home = React.lazy(() => import('../Pages/Main/Home/Home.page'));
const Login = React.lazy(() => import('../Pages/Main/Login/Login.page'));
const Register = React.lazy(() => import('../Pages/Main/Register/Register.page'));
const Products = React.lazy(() => import('../Pages/Main/Products/Products.page'));
const Product = React.lazy(() => import('../Pages/Main/Product/Product.page'));

const routes = [
   { path: 'products/:id/', exact: false, Component: Product, title: 'Product', isPrivate: false },
   { path: 'products/', exact: false, Component: Products, title: 'Products', isPrivate: false },
   { path: 'login/', exact: false, Component: Login, title: 'Login', isPrivate: false },
   { path: 'register/', exact: false, Component: Register, title: 'Register', isPrivate: false },
   { path: '', exact: false, Component: Home, title: 'Home', isPrivate: false },
];

export default routes;