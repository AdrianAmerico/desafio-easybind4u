import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      flexDirection: "column",
      justifyContent: "space-evenly",
      display: "flex",
    },
    navPage: {
      display: "flex",
      alignItems: "center",
      margin: theme.spacing(4, 0),
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "50%",
      maxWidth: "500px",
      minWidth: "400px",
      margin: "0 auto",
      height: "60%",
      "& > p": {
        textAlign: "center",
      },
      "&:hover > p > span": {
        cursor: "pointer",
        textDecoration: "underline",
      },
      "& h2": {
        textAlign: "center",
        width: "70%",
        paddingBottom: theme.spacing(2),
      },
    },
    chevronContainer: {
      width: "80%",
      margin: "0 auto",
      padding: theme.spacing(1, 0),
      "& > ul": {
        display: "flex",
        alignItems: "center",
        listStyle: "none",
      },
    },
    li: {
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      width: "70%",
      height: "70%",
      justifyContent: "space-around",
    },
    inputAlign: {
      p: {
        color: theme.palette.primary.contrastText,
      },
      "& .makeStyles-root-11": {
        margin: "5px 0",
      },
      "& > div": {
        padding: theme.spacing(1, 0),
      },
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.contrastText,
      "& > p > span": {
        fontWeight: "bold",
        textDecoration: "underline",
      },
    },

    [theme.breakpoints.down("xs")]: {
      root: {
        margin: "10% auto",
        width: "90%",
        maxWidth: "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        position: "absolute",
        inset: "0",
      },
      navPage: {
        display: "none",
      },
      container: {
        width: "100%",
        height: "70%",
        margin: "auto 0",
        alignItems: "center",
        minWidth: "auto",
        maxWidth: "auto",
      },
      chevronContainer: {
        display: "none",
      },
      formContainer: {},
      inputAlign: {},
    },
  })
);
