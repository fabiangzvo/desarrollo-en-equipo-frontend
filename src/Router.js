import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import AuthRoutes from "@modules/auth/Router";

function NotFound() {
  return <div>404</div>
}

export default function Routes() {
  return (
    <Router>
      <Switch>
        <AuthRoutes />
        <Route
          component={NotFound}
          path="*"
        />
      </Switch>
    </Router>
  );
}
