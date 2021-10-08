import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { theme } from "../global/theme";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CustomRoute from "../config/CustomRoute/";
import ProfilePage from "../pages/ProfilePage";

const Router: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <CustomRoute exact path="/login" component={LoginPage} />
        <CustomRoute exact path="/register" component={RegisterPage} />
        <CustomRoute exact path="/profile" component={ProfilePage} />
        <Route component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Router;
