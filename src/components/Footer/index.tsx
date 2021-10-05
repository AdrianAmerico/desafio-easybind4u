import React from "react";
import { useStyles } from "./styles";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <h1>Hello World</h1>
    </footer>
  );
};

export default Footer;
