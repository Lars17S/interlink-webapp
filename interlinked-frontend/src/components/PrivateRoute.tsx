import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  hasPermission: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  hasPermission,
  ...rest
}) => {
  return (
    <Route {...rest}>
      {hasPermission ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
