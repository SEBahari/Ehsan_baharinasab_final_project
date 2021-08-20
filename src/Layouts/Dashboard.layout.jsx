import React from "react";
import { useState } from "react";
import { Switch, Route, useRouteMatch, Redirect, NavLink, Link } from "react-router-dom";
import routes from "../Router/dashboard.routes";
import "bootstrap-icons/font/bootstrap-icons.css";
const isLogin = true;

function Dashboard() {
  const match = useRouteMatch();
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <div className={"flex w-full h-screen"}>
        {/* --------------------------------- Sidebar -------------------------------- */}
        <div className={"h-full overflow-hidden " + (sidebar ? " w-1/5 " : ' w-0 ')} >
          <div className={"w-full h-full overflow-x-hidden flex flex-col items-stretch bg-gradient-to-l from-cyan-900 to-teal-900 text-gray-50"}>
            {/* side header */}
            <h1 className={"w-full flex items-center justify-center h-12 text-3xl "}>پنل کاربری</h1>
            {/* side content */}
            <div className={"flex-1 flex flex-col items-stretch overflow-y-auto p-4 gap-1 border-t-2"}>
              <NavLink className={"rounded-md  p-2"} activeClassName={"bg-gray-50 text-gray-800"} to={"/dashboard/orders"} >سفارشات</NavLink>
              <NavLink className={"rounded-md  p-2"} activeClassName={"bg-gray-50 text-gray-800"} to={"/dashboard/products"} >کالاها</NavLink>
              <NavLink className={"rounded-md  p-2"} activeClassName={"bg-gray-50 text-gray-800"} to={"/dashboard/quantity"} >موجودی</NavLink>
            </div>
            <div className="text-sm font-medium text-gray-400 flex items-center justify-center h-10 bg-gradient-to-l to-cyan-800 from-teal-800">
              All rights reserved
              &copy;
              2021
            </div>
          </div>
        </div>
        {/* --------------------------------- Content -------------------------------- */}
        <div className={"content flex-1 h-ful overflow-hidden"}>
          {/* content */}
          <div className="relative w-full h-full overflow-x-hidden flex flex-col items-stretch">
            {/* toggle button */}
            <button className={"absolute top-0 right-0 text-white bg-teal-900 rounded-l-xl w-12 h-12 text-2xl leading-none "} onClick={() => setSidebar(!sidebar)} >
              <i className={"bi bi-list"} />
            </button>
            {/* navbar */}
            <nav className={"h-12 pr-14 pl-8 bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-between"}>
              <div className=""></div>
              <div>
                <Link to={"/login"} className={"leading-none text-white text-2xl "}>
                  <i className={"bi bi-person-circle"} />
                </Link>
              </div>
            </nav>
            {/* content */}
            <main className="relative flex-1 overflow-y-auto">
              <Switch>
                {
                  routes.map(({ path, exact, Component, isPrivate }, index) => (
                    <Route
                      key={index}
                      path={match.path + path}
                      exact={exact}
                    >
                      {(isPrivate && !isLogin) ? <Redirect to={"/login"} /> : <Component />}
                    </Route>
                  ))
                }
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
