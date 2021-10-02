import { ThemeProvider } from "@emotion/react";
import GlobalState from "./global/GlobalState";
import { green, purple } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import Router from "./Router";

const bananinha = createTheme({
  palette: {
    primary: {
      main: purple[500],
      dark: "#262A34",
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={bananinha}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
