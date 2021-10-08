import React from "react";
import StyledButton from "../../../components/Button";
import { TextContainer } from "../../../components/TextContainer";
import { useStyles } from "./styles";

const MyProfile = ({ mockData }: any) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div>
        <h1>Meu cadastro</h1>
        <form className={classes.form}>
          <TextContainer>
            <p>Nome completo</p>
            <div>
              <section>
                <span>{mockData?.fullName}</span>
                <span>Alterar</span>
              </section>
            </div>
          </TextContainer>

          <TextContainer>
            <p>Email</p>
            <div>
              <section>
                <span>{mockData?.email}</span>
                <span>Alterar</span>
              </section>
            </div>
          </TextContainer>

          <TextContainer>
            <p>Data de nascimento</p>
            <div className={classes.disable}>
              <section>
                <span>{mockData?.birthday}</span>
              </section>
            </div>
          </TextContainer>

          <TextContainer>
            <p>CPF</p>
            <div className={classes.disable}>
              <section>
                <span>23********</span>
              </section>
            </div>
          </TextContainer>

          <TextContainer>
            <p>Senha</p>
            <div>
              <section>
                <span>********</span>
                <span>Alterar</span>
              </section>
            </div>
          </TextContainer>
        </form>
      </div>
      <StyledButton>Salvar alterações</StyledButton>
    </section>
  );
};

export default MyProfile;
