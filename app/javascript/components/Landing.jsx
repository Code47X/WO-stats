import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import LandingStyles from "../styles/Landing";

const Landing = props => {
  const { classes } = props;

  return (
    <Fragment>
      <div className={classes.hero}>
        <div className={classes.colorOverlay}>
          <div className={classes.heroContent}>
            <Typography variant="h3" className={classes.heroText}>
              Workout. Record. Analyze.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withStyles(LandingStyles)(Landing);
