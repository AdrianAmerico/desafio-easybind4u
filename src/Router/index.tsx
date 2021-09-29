import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import theme from '../styles/theme';

const Router: React.FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>
            <h1>Hello World</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default Router;
