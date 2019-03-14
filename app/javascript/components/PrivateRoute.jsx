import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import Auth from "./AuthService";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.loggedIn() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PrivateRoute;
