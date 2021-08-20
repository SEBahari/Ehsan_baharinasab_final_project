import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./Router/web.routes";
import Loader from "./Components/Loader/Loader";

const isLogin = true;

function App() {
  return <>
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          {
            routes.map(({ path, exact, Component }, index) => (
              <Route
                key={index}
                path={path}
                exact={exact}
                component={Component}
              />
            ))
          }
        </Switch>
      </React.Suspense>
      {
        isLogin ? (
          <div className={"p-1 bg-gray-800 text-white text-lg leading-none flex justify-center fixed z-50 bottom-0 inset-x-0 "} style={{ direction: "ltr" }}>
            <Link className={"px-2 border -mr-px border-white"} to={"/dashboard"}><i className={"bi bi-speedometer2 mr-1"} />Dashboard</Link>
            <Link className={"px-2 border -mr-px border-white"} to={"/"}><i className={"bi bi-house mr-1"} />Home</Link>
            <Link className={"px-2 border -mr-px border-white"} to={"/logout"}><i className={"bi bi-box-arrow-right mr-1"} />Logout</Link>
          </div>
        ) : ''
      }
    </Router>
  </>;
}

export default App;
