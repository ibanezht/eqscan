import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Auth } from "aws-amplify";
import { SignIn as AWSSignIn } from "aws-amplify-react";
import Loading from "../loading";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

// eslint-disable-next-line
const dudUrl = "javascript:;";

class SignIn extends AWSSignIn {
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
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.signIn}>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.signIn}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href={dudUrl}>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href={dudUrl} onClick={() => this.changeState("signUp")}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }

  signIn() {
    const username = this.getUsernameFromInput() || "";
    const password = this.inputs.password;
    this.setState({ loading: true });
    Auth.signIn(username, password)
      .then(user => {
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          this.changeState("requireNewPassword", user);
        } else {
          this.changeState("signedIn", user);
        }
      })
      .catch(err => this.error(err))
      .finally(() => this.setState({ loading: false }));
  }
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progress: {
    minHeight: "75vh",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export default withStyles(styles)(SignIn);
