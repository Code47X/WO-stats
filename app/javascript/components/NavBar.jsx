import React, { Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import NavBarStyles from "../styles/NavBar";

class NavBar extends React.Component {
  state = {
    drawerOpen: false
  };

  toggleDrawer = drawerOpen => () => {
    this.setState({
      drawerOpen
    });
  };

  render() {
    const { classes } = this.props;
    const { drawerOpen } = this.state;

    return (
      <Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Workout Stats
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={drawerOpen} onClose={this.toggleDrawer(false)}>
          <div
            className={classes.drawerContainer}
            tabIndex={0}
            role="button"
            onKeyDown={this.toggleDrawer(false)}
          >
            <div className={classes.xContainer}>
              <IconButton
                className={classes.xButton}
                onClick={this.toggleDrawer(false)}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <Typography className={classes.drawerTitle} variant="h4">
              Workout Stats
            </Typography>
            <Divider />
            <List>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
              </Link>
              <Link to="/workouts" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <AssessmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Workouts" />
                </ListItem>
              </Link>
              <Link to="/workouts/new" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <AddBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Record" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(NavBarStyles)(NavBar);
