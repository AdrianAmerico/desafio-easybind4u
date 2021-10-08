import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Router from "./Router";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router />
    </MuiPickersUtilsProvider>
  );
}

export default App;
