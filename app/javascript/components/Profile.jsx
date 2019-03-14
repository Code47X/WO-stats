import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ProfileStyles from "../styles/Profile";

const Profile = props => {
  const { classes } = props;

  return <h1>Profile Page</h1>;
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(ProfileStyles)(Profile);
