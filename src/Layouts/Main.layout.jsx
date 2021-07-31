import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import routes from '../Router/main.routes';
import Header from '../Components/Main/Header';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';

function Main() {
   const match = useRouteMatch();
   return (
      <>
         <Header />
         <main style={{ paddingTop: '115px' }}>
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