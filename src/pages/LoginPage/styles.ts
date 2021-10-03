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
    buttonContainer: {
      "& > .MuiButton-root": {
        borderRadius: "8px",
      },
      "& > button > span": {
        padding: theme.spacing(1, 0),
        color: "black",
      },
    },
    span: {
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
    googleButton: {
      width: "100%",
      "& > .MuiButton-root": {
        borderRadius: "8px",
        background: "#F2F6FB",
      },
      "& > button > span": {
        padding: theme.spacing(1, 0),
        color: "#828BA1",
      },
    },
    facebookButton: {
      width: "100%",
      margin: theme.spacing(2, 0),
      "& > .MuiButton-root": {
        borderRadius: "8px",
        background: "#3B5998",
      },
      "& > button > span": {
        padding: theme.spacing(1, 0),
        color: "white",
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
        "& > div": {
          margin: theme.spacing(1, 0),
        },
        "& > span": {
          textAlign: "end",
          padding: theme.spacing(1, 0),
        },
      },
      textInfo: {
        display: "flex",
        padding: theme.spacing(2, 0),
        textAlign: "center",
        alignItems: "center",
        "& > p": {
          width: "100%",
        },
        "& > p > span": {
          fontWeight: "bold",
          textDecoration: "underline",
          cursor: "pointer",
        },
      },
      divider: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(2, 0),
        "& > div": {
          width: "100%",
          height: "1px",
          borderBottom: "1px dotted #E1E8F3",
        },
        "& > span": {
          padding: theme.spacing(0, 1),
          color: theme.palette.primary.contrastText,
        },
      },
      buttonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > button": {
          margin: theme.spacing(1, 0),
        },
      },
      svg: {
        width: "1.5rem",
        height: "1.5rem",
      },
    },
  })
);
