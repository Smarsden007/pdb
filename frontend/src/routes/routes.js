import React from 'react';
import { Route, redirect, BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

export  const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuth } = useSelector((state) => state.auth);
    return ( 
      <Route
    {...rest}
    render={(props) =>
      isAuth ? (
            <Component {...props} />
      ) : (
        <redirect to="/" />
      )
    }
  />
);
};