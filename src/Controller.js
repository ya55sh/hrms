import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardLayout from "./component/dashboardLayout/DashboardLayout";
import Home from "./screen/home/Home"
import Recruitment from "./screen/recruitment/Recruitment";

export default function Controller() {
  return (
    <Router>
      <DashboardLayout >
        <Switch>
          <Route exact path="/" render={(props)=><Home {...props}/>} />
          <Route exact path="/recruitment" render={(props)=><Recruitment {...props}/>} />
        </Switch>
      </DashboardLayout>
    </Router>
  );
}
