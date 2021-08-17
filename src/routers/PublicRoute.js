import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route {...rest}>
      {/* {user ? <Redirect to="/home" /> : <Component /> } */}
      <Component /> 
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
