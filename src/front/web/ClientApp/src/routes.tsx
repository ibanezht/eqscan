import { DashboardView } from "./components/views";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { FC } from "react";
import { Container, UserLayout } from "./components";

const Routes: FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/dashboard">
        <Container layout={UserLayout} page={DashboardView} title="Dashboard" />
      </Route>
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
