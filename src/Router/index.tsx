import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Header/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
