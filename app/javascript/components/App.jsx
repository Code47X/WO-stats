import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Landing from "./Landing";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/create_account" component={CreateAccount} exact />
          <Route path="/login" component={Login} exact />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
