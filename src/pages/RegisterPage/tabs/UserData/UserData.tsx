import React from "react";
import TextInput from "../../../../components/TextInput";

const UserData: React.FC = () => {
  return (
    <>
      <main>
        <TextInput placeholder="Nome completo" />
        <TextInput placeholder="E-mail" />
        <TextInput placeholder="Data de nascimento" />
        <TextInput placeholder="CPF" />
      </main>
    </>
  );
};

export default UserData;
