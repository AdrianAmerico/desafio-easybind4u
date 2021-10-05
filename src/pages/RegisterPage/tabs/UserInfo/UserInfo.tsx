import { Button } from "@material-ui/core";
import React from "react";
import CircleOneFull from "../../../../assets/CircleOne/CircleOneFull";
import CircleTwoEmpty from "../../../../assets/CircleTwo/CircleTwoEmpty";
import Line from "../../../../assets/Line";
import StyledButton from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import { useStyles } from "./styles";

const UserInfo: React.FC = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.navPage}>
          <CircleOneFull />
          <Line/>
          <CircleTwoEmpty/>
        </nav>
        <h2>Preencha os campos para prosseguir com o cadastro</h2>
        <form className={classes.formContainer}>
          <div className={classes.inputAlign}>
            <div>
              <TextInput placeholder="Nome completo" />
              <TextInput placeholder="E-mail" />
            </div>
            <div>
              <TextInput placeholder="Data de nascimento" />
              <TextInput placeholder="CPF" />
            </div>
          </div>
          <StyledButton>Próxima</StyledButton>
        </form>

        <p>
          Já tem cadastro? Faça <span>login aqui</span>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
