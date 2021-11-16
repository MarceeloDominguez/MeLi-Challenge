import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailsScreen } from "../screens/DetailsScreen";
import { HomeScreen } from "../screens/HomeScreen";

export const Routes = () => {
  return (
    <div style={{ backgroundColor: "#ebebeb" }}>
      <Router>
        <Switch>
          <Route component={HomeScreen} path="/" exact />
          <Route component={DetailsScreen} path="/DetailsScreen/:id" exact />
        </Switch>
      </Router>
    </div>
  );
};
