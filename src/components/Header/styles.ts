import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      flex: "1",
    },
    container: {
      width: "80%",
      margin: "0 auto",
      display: "flex",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      justifyContent: "space-between",
      alignItems: "center",
      transition: "width 1s",
    },
    menu: {
      display: "none",
    },
    logo: {
      color: "green",
    },
    search: {
      width: "50%",
      "& .MuiOutlinedInput-root": {
        background: "#262A34",
        borderRadius: theme.spacing(1),
      },
      "& .MuiOutlinedInput-input": {
        padding: "16.5px 14px",
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
      svg: {
        width: "2rem",
        height: "2rem",
      },
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
      userAccess_span: {
        display: "none",
      },
    },
    svg: {
      width: "1.5rem",
      height: "1.5rem",
    },
  })
);
