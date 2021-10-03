import React, { useState } from "react";
import Header from "../../components/Header";
import { useStyles } from "./styles";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import { Button, Divider, InputAdornment } from "@material-ui/core";
import TextInput from "../../components/TextInput";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import VisibilityOffRoundedIcon from "@material-ui/icons/VisibilityOffRounded";
import StyledButton from "../../components/Button";
import GoogleIcon from "../../assets/GoogleIcon";
import FacebookIcon from "../../assets/FacebookIcon";

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  const showPassword = (): void => {
    setIsVisible(true);
  };

  const hiddenPassword = (): void => {
    setIsVisible(false);
  };

  return (
    <>
      <Header />
      <main className={classes.root}>
        <section className={classes.headerInfo}>
          <div className={classes.textContainer}>
            <h1>Olá! Seja bem vindo ao site</h1>
            <span>Entre com seu nome de usuário e senha</span>
          </div>
          <div></div>
        </section>

        <form className={classes.formContainer}>
          <div className={classes.fieldContainer}>
            <TextInput
              placeholder="Usuário"
              inputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <PersonOutlineRoundedIcon className={classes.svg} />
                  </InputAdornment>
                ),
              }}
            />
            <TextInput
              placeholder="Senha"
              inputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <VpnKeyRoundedIcon className={classes.svg} />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="start">
                    {isVisible ? (
                      <VisibilityRoundedIcon className={classes.svg} />
                    ) : (
                      <VisibilityOffRoundedIcon
                        className={classes.svg}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <p>
              <span className={classes.span}>Esqueceu a senha?</span>
            </p>
          </div>

          <StyledButton>Entrar</StyledButton>
        </form>

        <div className={classes.textInfo}>
          <p>
            Nao tem uma conta ? <span>Cadastre-se</span>
          </p>
        </div>

        <div className={classes.divider}>
          <div />
          <span>Ou</span>
          <div />
        </div>

        <div className={classes.buttonContainer}>
          <div className={classes.googleButton}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              startIcon={<GoogleIcon />}
            >
              Entrar com Google
            </Button>
          </div>
          <div className={classes.facebookButton}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              startIcon={<FacebookIcon />}
            >
              Entrar com Facebook
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
