import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import routes from "./Router/web.routes";
import Loader from "./Components/Loader/Loader";

const isLogin = true;

function App() {
  return <>
    <Router>
      <React.Suspense fallback={<Loader/>}>
        <Switch>
          {
            routes.map(( { path, exact, Component, isPrivate }, index ) => (
              <Route
                key={index}
                path={path}
                exact={exact}
              >
                {(isPrivate && !isLogin) ? <Redirect to={"/login"}/> : <Component/>}
              </Route>
            ))
          }
        </Switch>
      </React.Suspense>
    </Router>
  </>;
}

export default App;
