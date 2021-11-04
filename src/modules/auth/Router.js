import React from 'react'
import { Switch, Route } from 'react-router-dom';

import SignIn from "./signIn/SignIn.component";
import RememberPassword from "./rememberPassword";

function Router() {
  const module = 'auth'

  return (
    <Switch>
      <Route exact path={`/${module}/sign-in`} component={SignIn} />
      <Route exact path={`/${module}/remember-password`} component={RememberPassword} />
    </Switch>
  )
}

export default Router
