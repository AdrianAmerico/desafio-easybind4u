import React from "react";
import { Container } from "../../components/Container";
import { useStyles } from "./style";
const ProfilePage: React.FC = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <h1>Hello World</h1>
    </main>
  );
};
export default ProfilePage;
