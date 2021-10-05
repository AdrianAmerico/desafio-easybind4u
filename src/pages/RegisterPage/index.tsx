import React from "react";
import Header from "../../components/Header";
import UserInfo from "./tabs/UserInfo/UserInfo";
import { useStyles } from "./styles";
import { Container } from "../../components/Container";

const RegisterPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.root}>
        <UserInfo />
      </main>
    </>
  );
};

export default RegisterPage;
