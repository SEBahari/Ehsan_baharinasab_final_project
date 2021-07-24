import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../Router/main.routes';

function Main() {
   return (
      <>
         <Switch>
            {
               routes.map(({ path, exact, Component }, index) => (
                  <Route
                     key={index}
                     path={path}
                     exact={exact}
                  >
                     <Component />
                  </Route>
               ))
            }
         </Switch>
      </>
   );
}

export default Main;