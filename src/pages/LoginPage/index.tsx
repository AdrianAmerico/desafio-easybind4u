import React from "react";
import Header from "../../components/Header";
import { useStyles } from "./styles";

const LoginPage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.root}>
        
        <section>
          <h1>Olá! Seja bem vindo ao site</h1>
          <span>Entre com seu nome de usuário e senha</span>
        </section>

        <form>
          <input />
          <input />
          <span>Esqueceu a senha?</span>

          <button>Entrar</button>
        </form>
        <div>
          <p>
            Nao tem uma conta ? <span>Cadastre-se</span>
          </p>
        </div>

        <div>
          <div />
          <span>Ou</span>
          <div />
        </div>

        <div>
          <button>Entrar com Google</button>
          <button>Entrar com Facebook</button>
        </div>
      </main>
    </>
  );
};
export default LoginPage;
