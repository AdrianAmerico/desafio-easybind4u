import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#1a1b20",
    color: "#828BA1",
  },
  container: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    padding: "20px 0",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "green",
  },
  search: {
    width: "50%",
    "& > div, & > div > label": {
      color: "#828BA1",
    },
    "& > div > fieldset": {
      background: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      background: "#262A34",
      borderRadius: "8px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "16.5px 14px",
    },
    "& .MuiSvgIcon-root": {
      color: "#828BA1",
    },
  },
  userAccess: {
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userAccess_span: {
    margin: "0 5px",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));
