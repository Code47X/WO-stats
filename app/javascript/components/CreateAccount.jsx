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
import CreateAccountStyles from "../styles/CreateAccount";
import AuthService from "./AuthService";

class CreateAccount extends React.Component {
  state = {
    createForm: {
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  };

  Auth = new AuthService();

  handleChange = name => event => {
    const { createForm } = this.state;

    this.setState({
      createForm: {
        ...createForm,
        [name]: event.target.value
      }
    });
  };

  handleSubmit = async event => {
    const { createForm } = this.state;

    event.preventDefault();

    const data = await this.Auth.createAccount(createForm);
    if (data.status === 200) {
      // TODO: Account created and logged in
    } else {
      // TODO: Handle form errors
    }
  };

  render() {
    const { classes } = this.props;
    const { createForm } = this.state;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                name="username"
                id="username"
                value={createForm.username}
                onChange={this.handleChange("username")}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                name="email"
                type="email"
                id="email"
                value={createForm.email}
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
                value={createForm.password}
                onChange={this.handleChange("password")}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password_confirmation">
                Password Confirmation
              </InputLabel>
              <Input
                name="password_confirmation"
                type="password"
                id="password_confirmation"
                value={createForm.password_confirmation}
                onChange={this.handleChange("password_confirmation")}
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

CreateAccount.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(CreateAccountStyles)(CreateAccount);
