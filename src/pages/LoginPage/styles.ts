import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    headerInfo: {},
    textContainer: {},
    formContainer: {},
    fieldContainer: {},
    textInfo: {},
    divider: {},
    buttonContainer: {},
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
      },
      fieldContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      textInfo: {},
      divider: {},
      buttonContainer: {},
    },
    svg: {},
  })
);
