import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import routes from "../Router/main.routes";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function Main() {
  const match = useRouteMatch();
  return (
    <div className={"min-h-screen flex flex-col items-stretch"}>
      {/* -------------------------------- Header -------------------------------- */}
      <Header />

      {/* --------------------------------- Main --------------------------------- */}
      <main className={"flex-1"}>
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

      {/* -------------------------------- Footer -------------------------------- */}
      <Footer />
    </div>
  );
}

export default Main;