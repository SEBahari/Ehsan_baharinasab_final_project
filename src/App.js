import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./Router/web.routes";
import Loader from "./Components/Loader/Loader";

const isLogin = true;

function App() {
  return <>
    <Router>
      <React.Suspense fallback={<Loader/>}>
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
    </Router>
  </>;
}

export default App;
