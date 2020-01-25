import React from "react";
import { Route } from "react-router-dom";
const userAuth = require("../../api/userAuthentication");
console.log(window.location);
if (!userAuth.isAuthenticated() && window.location.pathname !== "/login") {
  window.location.href = "login";
}

export default ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};
