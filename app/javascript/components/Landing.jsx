import React, { Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CreateIcon from "@material-ui/icons/Create";
import TimelineIcon from "@material-ui/icons/Timeline";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
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
            <Link to="/create_account" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" size="large">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.mainContent}>
        <Paper className={classes.paper}>
          <Grid container spacing={8} justify="space-evenly">
            <Grid item className={classes.feature}>
              <Avatar className={classes.avatar}>
                <FitnessCenterIcon className={classes.icon} />
              </Avatar>
              <Typography variant="h3" className={classes.featureTitle}>
                Workout
              </Typography>
              <Typography variant="body1" className={classes.featureText}>
                This ones all on you. Time to wake up and hit the gym! Getting
                started can be the hardest part, but we promise it&apos;s worth
                it. Get your workout in, we&apos;ll be waiting for ya!
              </Typography>
            </Grid>
            <Grid item className={classes.feature}>
              <Avatar className={classes.avatar}>
                <CreateIcon className={classes.icon} />
              </Avatar>
              <Typography variant="h3" className={classes.featureTitle}>
                Record
              </Typography>
              <Typography variant="body1" className={classes.featureText}>
                Finished working out? Time to record your exercises into the
                application. Just log in and click record workout. Simple right?
                We&apos;ll take care of the rest!
              </Typography>
            </Grid>
            <Grid item className={classes.feature}>
              <Avatar className={classes.avatar}>
                <TimelineIcon className={classes.icon} />
              </Avatar>
              <Typography variant="h3" className={classes.featureTitle}>
                Analyze
              </Typography>
              <Typography variant="body1" className={classes.featureText}>
                A variety of charts and graphs are automaticly generated based
                on your previous workouts. This makes it easy to track your
                progress and see just how far you&apos;ve come!
              </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.paperDivider} />
          <Grid container justify="center">
            <Grid item className={classes.about}>
              <Typography variant="h3" className={classes.aboutTitle}>
                What&apos;s this about?
              </Typography>
              <Typography variant="subtitle2" className={classes.aboutText}>
                This is a demo application I built for fun for my portfolio.
                While it is a fully functional application and your free to use
                it as you see fit, it will be hosted on a free heroku server so
                performance will likely varry. I built it using React for the
                frontend and Rails for the backend. Have a look around and let
                me know what you think!
              </Typography>
              <Divider className={classes.aboutDivider} />
              <Typography variant="h6">Just want to explore?</Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.demoButton}
              >
                Login as Demo Account
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(LandingStyles)(Landing);
