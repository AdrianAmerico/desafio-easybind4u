import { ThemeProvider } from "@emotion/react";
import GlobalState from "./global/GlobalState";
import Router from "./Router";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
