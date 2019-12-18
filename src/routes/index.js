import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact compenent={SignIn} />
      <Route path="/register" compenent={SignUp} />

      <Route path="/dashboard" compenent={Dashboard} />
      <Route path="/profile" compenent={Profile} />
    </Switch>
  );
}
