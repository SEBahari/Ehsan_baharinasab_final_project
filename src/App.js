import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import routes from './Router/web.routes';
const isLogin = true;

function App() {
  return <>
    <Router>
      <React.Suspense fallback={<div>loading</div>}>
        <Switch>
          {
            routes.map(({ path, exact, Component, isPrivate }, index) => (
              <Route
                key={index}
                path={path}
                exact={exact}
              >
                {(isPrivate && !isLogin) ? <Redirect to={'/'} /> : <Component />}
              </Route>
            ))
          }
        </Switch>
      </React.Suspense>
    </Router>
  </>;
};

export default App;
