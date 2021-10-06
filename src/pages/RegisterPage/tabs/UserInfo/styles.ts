import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      "& .makeStyles-root-11": {
        margin: "5px 0",
      },
      "& > div": {
        padding: theme.spacing(1, 0),
      },
    },

    [theme.breakpoints.down("xs")]: {
      navPage: {
        display: "none",
      },
      container: {
        width: "100%",
        height: "70%",
        margin: "auto 0",
        alignItems: "center",
        minWidth: "auto",
        maxWidth: "none",
      },
      chevronContainer: {
        display: "none",
      },
      formContainer: {},
      inputAlign: {},
    },
  })
);
