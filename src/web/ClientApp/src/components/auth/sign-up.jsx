import {
  Avatar,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Auth } from "aws-amplify";
import { SignUp as AWSSignUp } from "aws-amplify-react";
import Loading from "../loading";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

// eslint-disable-next-line
const dudUrl = "javascript:;";

class SignUp extends AWSSignUp {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  showComponent() {
    const { classes } = this.props;
    const { loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  id="username"
                  key="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  onChange={this.handleInputChange}
                />
                <TextField
                  type="password"
                  id="password"
                  key="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  onChange={this.handleInputChange}
                />
                <TextField
                  type="email"
                  id="email"
                  key="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  onChange={this.handleInputChange}
                />
                <TextField
                  type="tel"
                  id="phone_number"
                  key="phone_number"
                  name="phone_number"
                  label="Phone Number"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  onChange={this.handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.signUp}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href={dudUrl} onClick={() => this.changeState("signIn")}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }

  signUp() {
    const signup_info = {
      username: this.inputs.username,
      password: this.inputs.password,
      attributes: {},
    };
    signup_info.attributes["phone_number"] = this.inputs.phone_number;
    signup_info.attributes["email"] = this.inputs.email;
    this.setState({ loading: true });
    Auth.signUp(signup_info)
      .then((data) => this.changeState("confirmSignUp", data.user.username))
      .catch((err) => this.error(err))
      .finally(() => this.setState({ loading: false }));
  }
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export default withStyles(styles)(SignUp);
