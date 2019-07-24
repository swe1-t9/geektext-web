import { isLoggedIn } from '../auth';
import { Route, Redirect } from 'react-router';
import * as React from 'react';

const ProtectedRoute = ({
  component: Component,
  ...rest
}: Omit<React.ComponentProps<typeof Route>, 'component'> & {
  component: React.FC;
}) => (
  <Route
    {...rest}
    render={() => (isLoggedIn() ? <Component /> : <Redirect to="/login" />)}
  />
);

export default ProtectedRoute;
