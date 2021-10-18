import { lazy } from "react";

const Home = lazy(() => import("../Pages/Main/Home/Home.page"));
const Login = lazy(() => import("../Pages/Main/Login/Login.page"));
const Register = lazy(() => import("../Pages/Main/Register/Register.page"));
const Products = lazy(() => import("../Pages/Main/Products/Products.page"));
const Product = lazy(() => import("../Pages/Main/Product/Product.page"));
const Cart = lazy(()=>import("../Pages/Main/Cart/Cart.page"))

const routes = [
  { path: "products/:id/", exact: false, Component: Product, title: "Product", isPrivate: false, single:false },
  { path: "products/", exact: false, Component: Products, title: "Products", isPrivate: false, single:false },
  { path: "login/", exact: false, Component: Login, title: "Login", isPrivate: false, single:true },
  { path: "register/", exact: false, Component: Register, title: "Register", isPrivate: false, single:true },
  { path: "cart/", exact: false, Component: Cart, title: "سبد خرید", isPrivate: true, single:false },
  { path: "", exact: false, Component: Home, title: "Home", isPrivate: false, single:false },
];

export default routes;