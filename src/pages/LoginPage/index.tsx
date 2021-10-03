import React from "react";
import Header from "../../components/Header";
import { useStyles } from "./styles";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import { InputAdornment, TextField } from "@material-ui/core";
import TextInput from "../../components/TextInput";

const LoginPage: React.FC = () => {
  const classes = useStyles();

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
            <TextInput label="Usuario" />

            <input />
            <span>Esqueceu a senha?</span>
          </div>

          <button>Entrar</button>
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
          <button>Entrar com Google</button>
          <button>Entrar com Facebook</button>
        </div>
      </main>
    </>
  );
};
export default LoginPage;
