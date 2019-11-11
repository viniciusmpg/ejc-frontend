import React from "react";
import { Route, Redirect } from 'react-router-dom'
const userAuth = require('../../api/userAuthentication');
const isAuthenticated = userAuth.isAuthenticated();

export default ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
                isAuthenticated
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    );
};