import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    container: {
      width: "80%",
      margin: "0 auto",
      display: "flex",
      padding: "20px 0",
      justifyContent: "space-between",
      alignItems: "center",
    },
    menu: {
      display: "none",
    },
    logo: {
      color: "green",
    },
    search: {
      width: "50%",
      "& > div, & > div > label": {
        color: theme.palette.primary.contrastText,
      },
      "& > div > fieldset": {
        background: "yellow",
      },
      "& .MuiOutlinedInput-root": {
        background: "#262A34",
        borderRadius: theme.spacing(1),
      },
      "& .MuiOutlinedInput-input": {
        padding: "16.5px 14px",
      },
      "& .MuiSvgIcon-root": {
        color: "#828BA1",
      },
    },
    userIcon: {
      display: "none",
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
      svg: {},
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        // background: "red",
      },

      container: {
        width: "90%",
      },
      menu: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.primary.contrastText,
      },
      logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(0, 1),
      },
      search: {
        display: "none",
      },
      userIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      userAccess: {
        display: "none",
      },
      userAccess_span: {},
    },
    svg: {
      width: "1.5rem",
      height: "1.5rem",
    },
  })
);
