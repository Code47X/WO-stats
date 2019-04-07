import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ProfileStyles from "../styles/Profile";
import WorkoutService from "./WorkoutService";
import NavBar from "./NavBar";

class Profile extends React.Component {
  state = {
    workouts: []
  };

  async componentDidMount() {
    const workouts = await WorkoutService.getWorkouts();

    this.setState({
      workouts
    });
  }

  render() {
    const { classes } = this.props;
    const { workouts } = this.state;

    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classes.content}>
          <h1>Profile Component</h1>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(ProfileStyles)(Profile);
