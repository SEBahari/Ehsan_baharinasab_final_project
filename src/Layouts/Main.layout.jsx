import React from 'react';
import { Navbar, Container, Nav, FormControl, Form } from 'react-bootstrap';
import { Switch, Route, useRouteMatch, Link, NavLink } from 'react-router-dom';
import routes from '../Router/main.routes';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { MdPerson, MdShoppingCart } from 'react-icons/md';

function Main() {
   const match = useRouteMatch();
   return (
      <>
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
      </>
   );
}

export default Main;