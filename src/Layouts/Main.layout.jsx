import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import routes from "../Router/main.routes";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
const isLogin = true;

function Main() {
  const match = useRouteMatch();
  return (
    <Switch>
      {
        routes.map(({ path, exact, Component, isPrivate, single }, index) => (
          <Route
            key={index}
            path={match.path + path}
            exact={exact}
          >
            {
              single ? (<Component />) : (
                <div className={"min-h-screen flex flex-col items-stretch"}>
                  {/* -------------------------------- Header -------------------------------- */}
                  <Header />
                  {/* --------------------------------- Main --------------------------------- */}
                  <main className={"flex-1"}>
                    {(isPrivate && !isLogin) ? <Redirect to={"/login"} /> : <Component />}
                  </main>
                  {/* -------------------------------- Footer -------------------------------- */}
                  <Footer />
                </div>
              )
            }
          </Route>
        ))
      }
    </Switch>
  );
}

export default Main;