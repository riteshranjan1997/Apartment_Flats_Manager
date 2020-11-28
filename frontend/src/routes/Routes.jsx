import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../components/admin_page/Login"
import DashboardPage from "../components/dashboard_page/DashboardPage";
import FlatPage from "../components/flat_page/FlatPage"

export default function Routes() {
  

  return (
    <Switch>
      <Route path = "/" exact render={(props) => <DashboardPage props={props} /> } />
      <Route path ="/flat/:id" render={(props) => <FlatPage props={props}/> } />
      <Route path= "/login" exact render={(props) => <LoginPage props={props} />} />
    </Switch>
  );
}
