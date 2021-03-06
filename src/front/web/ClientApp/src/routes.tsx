import { DashboardView } from "./components/views";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { FC } from "react";
import { UserLayout } from "./components/layout";
import { Container } from "./components";

const Routes: FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/dashboard">
        <Container page={DashboardView} layout={UserLayout} />
      </Route>
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
