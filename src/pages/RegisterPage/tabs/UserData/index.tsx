import React, { useState } from "react";
import Line from "../../../../assets/Line";
import StyledButton from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CircleOneEmpty from "../../../../assets/CircleOne/CircleOneEmpty";
import CircleTwoFull from "../../../../assets/CircleTwo/CircleTwoFull";
import { useStyles } from "./styles";

import { InputAdornment, Checkbox } from "@material-ui/core";
import EyeIcon from "../../../../assets/EyeIcon";
import { Container } from "../../../../components/Container";
import { ChevronContainer } from "../../../../components/ChevronContainer";

const UserData = ({
  body,
  onChange,
  changeFirstStep,
  sendRequest,
}: any): JSX.Element => {
  const classes = useStyles();
  const [isCheckedTrust, setIsCheckedTrust] = useState<boolean>(true);

  return (
    <Container>
      <ChevronContainer>
        <ul>
          <li>Pagina Inicial</li>
          <ChevronRightIcon />
          <li>Cadastre-se</li>

          <ChevronRightIcon />
          <li>Dados Pessoais</li>
        </ul>
      </ChevronContainer>
      <div className={classes.container}>
        <nav className={classes.navPage}>
          <CircleOneEmpty onClick={changeFirstStep} />
          <Line />
          <CircleTwoFull />
        </nav>
        <h2>Preencha os campos para prosseguir com o cadastro</h2>
        <form
          className={classes.formContainer}
          onChange={(event) => event.preventDefault()}
        >
          <div className={classes.inputAlign}>
            <div>
              <TextInput
                label="Nome de usuário"
                name="nickname"
                onChange={onChange}
                value={body.nickkame}
              />
              <p>Use letras ou números, mas evite pontos e espaços.</p>
            </div>

            <div>
              <TextInput
                label="Senha"
                name="pass"
                onChange={onChange}
                value={body.pass}
                type={"password"}
                placeholder="********"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EyeIcon className={classes.svg} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextInput
                label="Confirmar senha"
                name="checkPass"
                onChange={onChange}
                value={body.checkPass}
                type={"password"}
                placeholder="********"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EyeIcon className={classes.svg} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className={classes.checkbox}>
            <Checkbox
              checked={isCheckedTrust}
              onChange={() => setIsCheckedTrust(!isCheckedTrust)}
            />
            <p>
              Eu concordo com o <span>termos e condições de uso</span>
            </p>
          </div>
          <StyledButton onClick={sendRequest}>Concluir</StyledButton>
        </form>
        <p style={{ color: "#828BA2" }}>
          Já tem cadastro? Faça <span>login aqui</span>
        </p>
      </div>
    </Container>
  );
};

export default UserData;
