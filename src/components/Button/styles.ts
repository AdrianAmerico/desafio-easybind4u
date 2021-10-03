import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > .MuiButton-root": {
        borderRadius: "8px",
      },
      "& > button > span": {
        padding: theme.spacing(1, 0),
        color: theme.palette.secondary.contrastText,
      },
    },
  })
);
