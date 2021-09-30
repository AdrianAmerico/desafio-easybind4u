import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <div>
          <h1>Hello World</h1>
        </div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
