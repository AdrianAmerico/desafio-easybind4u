import { Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const StyledButton: React.FC = ({ children }): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button color="primary" fullWidth>
        {children}
      </Button>
    </div>
  );
};

export default StyledButton;
