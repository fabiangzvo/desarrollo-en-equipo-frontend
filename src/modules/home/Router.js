import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Sensors from "./sensors/Sensors";

function Router() {
  return (
    <Switch>
      <Route exact path="/home" component={Sensors} />
    </Switch>
  )
}

export default Router
