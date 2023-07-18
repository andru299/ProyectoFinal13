import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location.pathname }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
