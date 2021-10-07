import React from "react";
import { ChevronContainer } from "../../components/ChevronContainer";
import { Main } from "../../components/Main";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./style";
import Menu from "../../components/Menu";

const ProfilePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Main>
      <ChevronContainer>
        <ul>
          <li>Pagina Inicial</li>
          <ChevronRightIcon />
          <li>Meus arremates</li>
        </ul>
      </ChevronContainer>

      <Menu />
    </Main>
  );
};
export default ProfilePage;
