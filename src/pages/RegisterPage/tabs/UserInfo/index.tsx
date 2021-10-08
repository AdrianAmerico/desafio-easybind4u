import React from "react";
import CircleOneFull from "../../../../assets/CircleOne/CircleOneFull";
import CircleTwoEmpty from "../../../../assets/CircleTwo/CircleTwoEmpty";
import Line from "../../../../assets/Line";
import StyledButton from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./styles";
import { Container } from "../../../../components/Container";
import { InputAdornment } from "@material-ui/core";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const UserInfo = ({
  body,
  onChange,
  changeSecondStep,
  selectedDate,
  handleDateChange,
}: any): JSX.Element => {
  const classes = useStyles();
  return (
    <Container>
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
          <CircleOneFull />
          <Line />
          <CircleTwoEmpty />
        </nav>
        <h2>Preencha os campos para prosseguir com o cadastro</h2>
        <form
          className={classes.formContainer}
          onSubmit={(event) => event.preventDefault()}
        >
          <div className={classes.inputAlign}>
            <div>
              <TextInput
                placeholder="Nome completo"
                name="fullName"
                onChange={onChange}
                value={body.fullName}
              />
              <TextInput
                placeholder="E-mail"
                type={"email"}
                name="email"
                onChange={onChange}
                value={body.email}
              />
            </div>
            <div>
              <TextInput
                placeholder="Data de nascimento"
                name="birthday"
                value={body.birthday}
                onChange={onChange}
                // inputProps={{
                //   endAdornment: (
                //     <InputAdornment position="start">
                //       <MuiPickersUtilsProvider utils={DateFnsUtils}>
                //         <KeyboardDatePicker
                //           disableToolbar
                //           variant="inline"
                //           format="MM/dd/yyyy"
                //           margin="normal"
                //           id="date-picker-inline"
                //           value={selectedDate}
                //           onChange={handleDateChange}
                //           KeyboardButtonProps={{
                //             "aria-label": "change date",
                //           }}
                //         />
                //       </MuiPickersUtilsProvider>
                //     </InputAdornment>
                //   ),
                // }}
              />
              <TextInput
                placeholder="CPF"
                name="cpf"
                onChange={onChange}
                value={body.cpf}
                max={"11"}
              />
            </div>
          </div>
          <StyledButton onClick={changeSecondStep}>Próxima</StyledButton>
        </form>
        <p>
          Já tem cadastro? Faça <span>login aqui</span>
        </p>
      </div>
    </Container>
  );
};

export default UserInfo;
