import {
  ConfirmSignUp,
  RequireNewPassword,
  SignIn,
  SignUp,
} from "./components/auth";
import { createBrowserHistory } from "history";
import React from "react";
import { Router } from "react-router";
import Routes from "./routes";
import { withAuthenticator } from "aws-amplify-react";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default withAuthenticator(App, false, [
  <SignIn key="signIn" />,
  <SignUp key="signUp" />,
  <ConfirmSignUp key="confirmSignUp" />,
  <RequireNewPassword key="requireNewPassword" />,
]);
