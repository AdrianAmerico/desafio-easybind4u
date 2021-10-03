import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
    },
    headerInfo: {},
    textContainer: {},
    formContainer: {},
    fieldContainer: {
      "& > p": {
        textAlign: "end",
        padding: theme.spacing(1, 0),
      },
    },
    textInfo: {},
    divider: {},
    buttonContainer: {},
    span: {
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        margin: "10% auto",
      },
      headerInfo: {
        width: "50%",
      },
      textContainer: {},
      formContainer: {
        display: "flex",
        flexDirection: "column",
        height: "60%",
        justifyContent: "space-evenly",
        padding: theme.spacing(2, 0),
      },
      fieldContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& > span": {
          textAlign: "end",
          padding: theme.spacing(1, 0),
        },
      },
      textInfo: {},
      divider: {},
      buttonContainer: {},
      svg: {
        width: "1.5rem",
        height: "1.5rem",
      },
    },
  })
);
