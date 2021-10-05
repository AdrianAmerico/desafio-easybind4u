import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      flex: "1",
      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        display: "none",
      },
    },
  })
);
