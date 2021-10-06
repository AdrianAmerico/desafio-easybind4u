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
      height: "60%",
      "& > p": {
        textAlign: "center",
      },
      "&:hover > p > span": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 5,
      height: "70%",
      justifyContent: "space-around",
    },
    inputAlign: {
      "& .makeStyles-root-11": {
        margin: "5px 0",
      },
      "& > div": {
        padding: theme.spacing(1, 0),
      },
    },

    [theme.breakpoints.down("xs")]: {
      root: {
        margin: "10% auto",
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        position: "absolute",
        inset: "0",
      },
      container: {
        height: "70%",
        margin: "5% auto",
      },
      formContainer: {},
      inputAlign: {},
    },
  })
);
