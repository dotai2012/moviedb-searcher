import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function RouteApp() {
  return (
    <Switch>
      <Route path="/about" />
    </Switch>
  )
}

export default RouteApp;