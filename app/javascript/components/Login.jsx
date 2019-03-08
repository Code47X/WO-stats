import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/Lock";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import LoginStyles from "./styles/Login";
import AuthService from "./AuthService";

class Login extends React.Component {
  state = {
    loginForm: {
      email: "",
      password: ""
    }
  };

  Auth = new AuthService();

  handleChange = name => event => {
    const { loginForm } = this.state;

    this.setState({
      loginForm: {
        ...loginForm,
        [name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    const { loginForm } = this.state;

    event.preventDefault();
    if (this.Auth.login(loginForm.email, loginForm.password)) {
      // TODO:
    } else {
      // TODO:
    }
  };

  render() {
    const { classes } = this.props;
    const { loginForm } = this.state;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                name="email"
                type="email"
                id="email"
                autoComplete="email"
                value={loginForm.email}
                onChange={this.handleChange("email")}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                value={loginForm.password}
                onChange={this.handleChange("password")}
                autoComplete="current-password"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(LoginStyles)(Login);
