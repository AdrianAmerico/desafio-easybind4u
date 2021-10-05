import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: "1",
      width: "100%",
      height: "100%",
      background: theme.palette.secondary.main,
    },
    footerContainer: {
      width: "90%",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2),
      "& ul": {
      listStyle: "none",
      },
    },
    gridRowOne: {
      display: "grid",
      gridColumn: "1/6",
      gridRow: "1",
      gridTemplateColumns: "repeat(6, 1fr)",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "start",
      "& > div": {
        flex: 1,
      },
    },
    gridRowTwo: {
      borderRight: "1px solid #34363F",
    },
    emptyCell: {
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        display: "none",
      },
    },
  })
);
