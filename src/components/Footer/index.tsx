import React from "react";
import { GridCell } from "../GridCell";
import { useStyles } from "./styles";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <nav className={classes.footerContainer}>
        <div className={classes.gridRowOne}>
          <GridCell>
            <h1>LOGO</h1>
          </GridCell>

          <GridCell>
            <ul>
              <li>Pagina Inicial</li>
              <li>Minha conta</li>
              <li>Meus leilões</li>
              <li>Favoritos</li>
            </ul>
          </GridCell>

          <GridCell>
            <ul>
              <li>Comprar</li>
              <li>Meus arremates</li>
              <li>Pagamentos</li>
              <li>Retirada</li>
            </ul>
          </GridCell>

          <GridCell>
            <ul>
              <li>Como funciona</li>
              <li>Termo de Serviço</li>
              <li>Central de ajuda</li>
            </ul>
          </GridCell>

          <GridCell>
            <ul>
              <li>Acompanhe:</li>
              <li>Lista de redes</li>
            </ul>
          </GridCell>

          <div className={classes.emptyCell}></div>
        </div>

        <GridCell style={{ gridRow: "1 / span 2" }}>
          <ul>
            <li>Atendimento:</li>
            <li>Via Whattsapp</li>
            <li>Vi e-mail</li>
            <li>segunda a domingo: 8h às 20h (exceto feriados)</li>
          </ul>
        </GridCell>
        <div style={{ gridColumn: "1/5", padding: "10px 0" }}>
          <ul>
            <li>Copyright © 2021 site.com.br LTDA</li>
            <li>
              CNPJ n.º 00.000.000/0000-00 / Av. Lorem ipsum dolor sit amet, nº
              000, Austin, Nova Iguaçu/RJ - CEP 00000-000 - empresa do grupo 4U.
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
