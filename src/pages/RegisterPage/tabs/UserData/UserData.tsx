import React, { useState } from "react";
import Line from "../../../../assets/Line";
import StyledButton from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CircleOneEmpty from "../../../../assets/CircleOne/CircleOneEmpty";
import CircleTwoFull from "../../../../assets/CircleTwo/CircleTwoFull";
import { useStyles } from "./styles";

import {
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Checkbox,
} from "@material-ui/core";
import EyeIcon from "../../../../assets/EyeIcon";

const UserData: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [isCheckedTrust, setIsCheckedTrust] = useState<boolean>(true);

  return (
    <div className={classes.root}>
      <nav className={classes.chevronContainer}>
        <ul>
          <li className={classes.li}>Pagina Inicial</li>
          <ChevronRightIcon />
          <li className={classes.li}>Cadastre-se</li>

          <ChevronRightIcon />
          <li className={classes.li}>Dados Pessoais</li>
        </ul>
      </nav>
      <div className={classes.container}>
        <nav className={classes.navPage}>
          <CircleOneEmpty />
          <Line />
          <CircleTwoFull />
        </nav>
        <h2>Preencha os campos para prosseguir com o cadastro</h2>
        <form className={classes.formContainer}>
          <div className={classes.inputAlign}>
            <div>
              <TextInput label="Nome de usuário" />
              <p>Use letras ou números, mas evite pontos e espaços.</p>
            </div>

            <div>
              <TextInput
                label="Senha"
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
          <StyledButton>Concluir</StyledButton>
        </form>
        <p style={{ color: "#828BA2" }}>
          Já tem cadastro? Faça <span>login aqui</span>
        </p>
      </div>
    </div>
  );
};

export default UserData;
