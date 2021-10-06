import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      flex: "8",
      padding: theme.spacing(2, 0),
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        flex: "20",
      },
    },
  })
);
