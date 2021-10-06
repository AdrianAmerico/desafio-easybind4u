import React, { useState } from "react";
import Header from "../../components/Header";
import UserInfo from "./tabs/UserInfo/UserInfo";
import { useStyles } from "./styles";
import Footer from "../../components/Footer";
import UserData from "./tabs/UserData/UserData";
import SimpleModal from "../../components/Modal";

const RegisterPage: React.FC = () => {
  const [isSecondStep, setIsSecondStep] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const changeSecondStep = (): void => {
    setIsSecondStep(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.root}>
        {isSecondStep ? <UserData /> : <UserInfo />}
      </main>
      <Footer />
      <SimpleModal open={isOpen} handleClose={handleClose} />
    </>
  );
};

export default RegisterPage;
