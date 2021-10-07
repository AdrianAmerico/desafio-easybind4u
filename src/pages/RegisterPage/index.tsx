import React, { useState } from "react";
import UserInfo from "./tabs/UserInfo";
import UserData from "./tabs/UserData";
import SimpleModal from "../../components/Modal";
import { Main } from "../../components/Main";

const RegisterPage: React.FC = () => {
  const [isSecondStep, setIsSecondStep] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const changeSecondStep = (): void => {
    setIsSecondStep(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Main>{isSecondStep ? <UserData /> : <UserInfo />}</Main>
      <SimpleModal open={isOpen} handleClose={handleClose} />
    </>
  );
};

export default RegisterPage;
