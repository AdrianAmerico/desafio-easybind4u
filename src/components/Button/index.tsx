import { Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const StyledButton: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        
      <Button color="primary" variant="contained" fullWidth>
        {children}
      </Button>
    </div>
  );
};

export default StyledButton;
