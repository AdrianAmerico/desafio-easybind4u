import React from "react";
import Header from "../../components/Header";
import UserInfo from "./tabs/UserInfo/UserInfo";
import { useStyles } from "./styles";
import Footer from "../../components/Footer";

const RegisterPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.root}>
        <UserInfo />
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
