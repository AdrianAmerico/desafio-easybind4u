import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    form: {
      width: "350px",
      height: "70%",
    },
    disable: {
      backgroundColor: `#E1E8F3 !important`,
      "& > section > span": {
        color: "#828BA1 !important",
      },
    },
  })
);
