import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#828BA1",
      main: "#00C1A5",
      dark: "#1A1B20",
      contrastText: "#828BA2",
    },
    secondary: {
      light: "#E1E8F3",
      main: "#262A34",
      dark: "#404152",
      contrastText: "#FFFFFF",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
  },
});
