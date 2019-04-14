import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

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

  totalExercises = () => {
    const { workouts } = this.state;

    let totalEx = 0;
    workouts.forEach(wo => {
      totalEx += wo.exercises_attributes.length;
    });

    return totalEx;
  };

  benchPressData = () => {
    const { workouts } = this.state;

    const data = [];
    workouts.forEach(wo => {
      wo.exercises_attributes.forEach(ex => {
        if (ex.exercise_name === "Bench press") {
          data.push({ date: wo.date, weight: ex.weight, reps: ex.reps });
        }
      });
    });
    return data;
  };

  squatData = () => {
    const { workouts } = this.state;

    const data = [];
    workouts.forEach(wo => {
      wo.exercises_attributes.forEach(ex => {
        if (ex.exercise_name === "Squat") {
          data.push({ date: wo.date, weight: ex.weight, reps: ex.reps });
        }
      });
    });
    return data;
  };

  render() {
    const { classes } = this.props;
    const { workouts } = this.state;

    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classes.content}>
          <div className={classes.basicContainer}>
            <Typography variant="h5" className={classes.containerTitle}>
              Basic Stats
            </Typography>
            <Paper className={classes.basicPaper}>
              <Grid container direction="row" justify="center" spacing={16}>
                <Grid item xs={12} sm={4}>
                  <div className={classes.basicCounter}>
                    <Typography variant="h6" className={classes.counterTitle}>
                      Total Workouts
                    </Typography>
                    <Typography variant="h6" className={classes.counterNumber}>
                      {workouts.length}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className={classes.basicCounter}>
                    <Typography variant="h6" className={classes.counterTitle}>
                      Total Exercises
                    </Typography>
                    <Typography variant="h6" className={classes.counterNumber}>
                      {this.totalExercises()}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className={classes.basicCounter}>
                    <Typography variant="h6" className={classes.counterTitle}>
                      Something
                    </Typography>
                    <Typography variant="h6" className={classes.counterNumber}>
                      5
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </div>
          <div className={classes.basicContainer}>
            <Typography variant="h5" className={classes.containerTitle}>
              Bench Press Progress
            </Typography>
            <Paper className={classes.basicPaper}>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={this.benchPressData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis
                    yAxisId="left"
                    domain={["auto", "auto"]}
                    orientation="left"
                  />
                  <YAxis
                    yAxisId="right"
                    domain={["auto", "auto"]}
                    orientation="right"
                  />
                  <Tooltip isAnimationActive={false} />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="weight"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="reps"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </div>

          <div className={classes.basicContainer}>
            <Typography variant="h5" className={classes.containerTitle}>
              Squat Progress
            </Typography>
            <Paper className={classes.basicPaper}>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={this.squatData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis
                    yAxisId="left"
                    domain={["auto", "auto"]}
                    orientation="left"
                  />
                  <YAxis
                    yAxisId="right"
                    domain={["auto", "auto"]}
                    orientation="right"
                  />
                  <Tooltip isAnimationActive={false} />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="weight"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="reps"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(ProfileStyles)(Profile);
