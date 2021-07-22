import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const {user} = useAuth();
  return (
    <Route {...rest}>
      {user ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};
/* desestructuramos las props y hacemos que herede todas, si ponenmos 
una antes de desustructura, tomara todos los elementos menos el que se puso,
para dar un alias al component se necesitan {} */
/* 
<Route exact={props.exact} path={props.path} component={props.component}> escribir las propiedad que hereda
</Route> 
*/
