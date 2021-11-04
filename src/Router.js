import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AuthRoutes from "@modules/auth/Router";
import SensorRoutes from "@modules/home/Router";

export default function Routes() {
  return (
    <Router>
      <SensorRoutes />
      <AuthRoutes />
    </Router>
  );
}
