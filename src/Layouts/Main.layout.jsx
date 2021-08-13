import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import routes from "../Router/main.routes";
import Header from "../Components/Main/Header";
import "bootstrap-icons/font/bootstrap-icons.css";

function Main() {
  const match = useRouteMatch();
  return (
    <>
      <Header />
      <main>
        <Switch>
          {
            routes.map(({ path, exact, Component }, index) => (
              <Route
                key={index}
                path={match.path + path}
                exact={exact}
              >
                <Component />
              </Route>
            ))
          }
        </Switch>
      </main>
    </>
  );
}

export default Main;