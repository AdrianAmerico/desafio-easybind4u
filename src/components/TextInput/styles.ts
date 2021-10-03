import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > div, & > div > label": {
        color: theme.palette.primary.contrastText,
      },
      "& .MuiOutlinedInput-root": {
        background: theme.palette.secondary.light,
        borderRadius: theme.spacing(1),
      },
      "& .MuiOutlinedInput-input": {
        padding: "16.5px 14px",
      },
      "& .MuiSvgIcon-root": {
        color: "#828BA1",
      },
    },
  })
);
