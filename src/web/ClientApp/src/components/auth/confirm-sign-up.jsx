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
import { ConfirmSignUp as AWSConfirmSignUp } from "aws-amplify-react";
import Loading from "../loading";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

// eslint-disable-next-line
const dudUrl = "javascript:;";

class ConfirmSignUp extends AWSConfirmSignUp {
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
            Confirm Sign In
          </Typography>
          <form className={classes.form} onSubmit={this.confirm}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  id="code"
                  key="code"
                  name="code"
                  label="Code"
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
              onClick={this.confirm}
            >
              Confirm
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

  confirm() {
    const username = this.usernameFromAuthData() || this.inputs.username;
    const { code } = this.inputs;
    Auth.confirmSignUp(username, code)
      .then(() => this.changeState("signedUp"))
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

export default withStyles(styles)(ConfirmSignUp);
