import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ProfileStyles from "../styles/Profile";
import WorkoutService from "./WorkoutService";

class Profile extends React.Component {
  state = {
    exerciseNames: [],
    workouts: []
  };

  async componentDidMount() {
    const workouts = await WorkoutService.getWorkouts();
    const exerciseNames = await WorkoutService.getExerciseNames();

    this.setState({
      exerciseNames,
      workouts
    });
  }

  render() {
    const { classes } = this.props;
    const { exerciseNames, workouts } = this.state;

    return (
      <div>
        <h1>Profile Page</h1>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(ProfileStyles)(Profile);
