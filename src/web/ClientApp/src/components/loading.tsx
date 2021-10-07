import {
  CircularProgress,
  createStyles,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      minHeight: "50vh",
    },
  }),
);

const Loading = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.content}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loading;
