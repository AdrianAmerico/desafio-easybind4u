import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { theme } from "../global/theme";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CustomRoute from "../config/CustomRoute/";

const Router: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>
        <CustomRoute exact path="/login" component={LoginPage} />
        <CustomRoute exact path="/register" component={RegisterPage} />
        <Route exact path="/profile"></Route>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Router;
