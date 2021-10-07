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
import { RequireNewPassword as AWSRequireNewPassword } from "aws-amplify-react";
import Loading from "../loading";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

// eslint-disable-next-line
const dudUrl = "javascript:;";

class RequireNewPassword extends AWSRequireNewPassword {
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
            Change Password
          </Typography>
          <form className={classes.form} onSubmit={this.change}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                  autoFocus
                  onChange={this.handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.change}
            >
              Change
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href={dudUrl} onClick={() => this.changeState("signIn")}>
                  Back to Sign In
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }

  change() {
    const user = this.props.authData;
    this.setState({ loading: true });
    Auth.completeNewPassword(user, this.inputs.password)
      .then(user => this.changeState("signedIn", user))
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

export default withStyles(styles)(RequireNewPassword);
