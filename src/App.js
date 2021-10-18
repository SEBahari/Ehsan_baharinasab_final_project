import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./Router/web.routes";
import Loader from "./Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "./Store/Reducers/Auth.Reducer/Auth.reducer";

function App() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();

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
          <div className={"text-white text-lg leading-none flex justify-center fixed z-50 bottom-0 inset-x-0 "} style={{ direction: "ltr" }}>
            <Link className={"p-1 border -mr-px bg-gray-800 border-white rounded-xl"} to={"/dashboard"}><i className={"bi bi-speedometer2 mr-1"} />Dashboard</Link>
            <Link className={"p-1 border -mr-px bg-gray-800 border-white rounded-xl"} to={"/"}><i className={"bi bi-house mr-1"} />Home</Link>
            <button className={"p-1 border -mr-px bg-gray-800 border-white rounded-xl"} onClick={() => dispatch(logoutUser())}><i className={"bi bi-box-arrow-right mr-1"} />Logout</button>
          </div>
        ) : ''
      }
    </Router>
  </>;
}

export default App;
