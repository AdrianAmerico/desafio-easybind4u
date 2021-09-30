import { ThemeProvider } from "@emotion/react";
import useData from "./global/data";
import GlobalState from "./global/GlobalContext";
import Router from "./Router";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState.Provider value={useData}>
        <Router />
      </GlobalState.Provider>
    </ThemeProvider>
  );
}

export default App;
