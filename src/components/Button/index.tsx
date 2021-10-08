import { Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

interface props {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
}

const StyledButton = ({ children, onClick, props }: props): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button color="primary" fullWidth onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default StyledButton;
