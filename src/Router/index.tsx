import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { theme } from "../global/theme";

const Router: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          {/* <Menu /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Router;
