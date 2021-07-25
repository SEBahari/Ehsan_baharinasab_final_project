import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import routes from '../Router/dashboard.routes';

function Dashboard() {
   const match = useRouteMatch();
   return (
      <>
         <Switch>
            {routes.map(({ path, exact, Component }, index) => (
               <Route
                  key={index}
                  path={match.path + path}
                  exact={exact}
               >
                  <Component />
               </Route>
            ))}
         </Switch>
      </>
   );
}

export default Dashboard;
