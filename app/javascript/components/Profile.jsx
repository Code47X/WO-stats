import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ProfileStyles from "../styles/Profile";
import WorkoutService from "./WorkoutService";

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
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
      <div className={`${classes.layout} ${classes.cardGrid}`}>
        <Grid container spacing={40}>
          {workouts.map(workout => (
            <Grid item key={workout.id} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <div className={classes.pieContainer}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={workout.exercises_attributes}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="reps"
                      >
                        {workout.exercises_attributes.map((entry, index) => (
                          <Cell
                            key={`cell-${entry.id}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {workout.date}
                  </Typography>
                  <Typography>{workout.description}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(ProfileStyles)(Profile);
