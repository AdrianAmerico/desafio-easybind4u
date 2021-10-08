import React, { useState } from "react";
import UserInfo from "./tabs/UserInfo";
import UserData from "./tabs/UserData";
import SimpleModal from "../../components/Modal";
import { Main } from "../../components/Main";
import useForm from "../../hooks/useForm";
import useRequests from "../../hooks/useRequests";
import { RegisterUser } from "../../config/requestTypes";
import { useHistory } from "react-router";

const RegisterPage: React.FC = () => {
  const [isSecondStep, setIsSecondStep] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>();
  const [loading, setLoading] = useState<Boolean>(false);
  const { body, onChange, clear } = useForm({
    fullName: "",
    email: "",
    nickname: "",
    birthday: "",
    cpf: "",
    id: "",
    pass: "",
    checkPass: "",
  });
  const history = useHistory();
  const requests = useRequests(setLoading);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const changeFirstStep = (): void => {
    setIsSecondStep(false);
  };

  const changeSecondStep = () => {
    const { fullName, email, birthday, cpf } = body;
    if (fullName.length > 5 && email.length > 5 && birthday && cpf.length > 5) {
      setIsSecondStep(true);
    }
  };
  const { fullName, email, nickname, birthday, cpf, pass, checkPass } = body;

  const sendRequest = async (): Promise<void> => {
    const body: RegisterUser = {
      fullName,
      email,
      nickname,
      birthday,
      cpfCnpj: cpf,
      account: {
        id: email,
        pass,
        checkPass,
      },
    };
    const result = await requests.registerUser(body);
    if (result) {
      clear();
      setIsOpen(true);
      history.push("/profile");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Main>
        {isSecondStep ? (
          <UserData
            body={body}
            onChange={onChange}
            changeFirstStep={changeFirstStep}
            sendRequest={sendRequest}
          />
        ) : (
          <UserInfo
            body={body}
            onChange={onChange}
            sendRequest={sendRequest}
            changeSecondStep={changeSecondStep}
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        )}
      </Main>
      <SimpleModal open={isOpen} handleClose={handleClose} />
    </>
  );
};

export default RegisterPage;
