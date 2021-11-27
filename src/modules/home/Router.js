import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Sensors from "./sensors/Sensors";
import Login from "../auth/signIn/SignIn.component";
import RegisterFranja from "./registerFranja/registerFranja"

function Router() {
  return (
    <Switch>
      <Route exact path="/home" component={Sensors} />
      <Route exact path="" component={RegisterFranja} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/RegisterFranja" component={RegisterFranja} />
    </Switch>
  )
}

export default Router
