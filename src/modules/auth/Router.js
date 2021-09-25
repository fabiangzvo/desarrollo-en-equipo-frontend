import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Login from "./login";
import RememberPassword from "./rememberPassword";

function Router() {
  const module = 'auth'

  return (
    <Switch>
      <Route exact path={`/${module}/login`} component={Login} />
      <Route exact path={`/${module}/remember-password`} component={RememberPassword} />
    </Switch>
  )
}

export default Router
