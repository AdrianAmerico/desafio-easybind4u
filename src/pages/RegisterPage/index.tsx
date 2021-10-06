import React, { useState } from "react";
import Header from "../../components/Header";
import UserInfo from "./tabs/UserInfo/UserInfo";
import { useStyles } from "./styles";
import Footer from "../../components/Footer";
import UserData from "./tabs/UserData/UserData";

const RegisterPage: React.FC = () => {
  const [isSecondStep, setIsSecondStep] = useState<boolean>(false);

  const changeSecondStep = (): void => {
    setIsSecondStep(true);
  };

  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.root}>
        {isSecondStep ? <UserData /> : <UserInfo />}
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
