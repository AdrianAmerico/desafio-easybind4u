import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { theme } from "../global/theme";
import LoginPage from "../pages/LoginPage";

const Router: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register"></Route>
        <Route exact path="/profile"></Route>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Router;
