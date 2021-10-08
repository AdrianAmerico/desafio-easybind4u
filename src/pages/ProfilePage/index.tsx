import React, { useState, useEffect } from "react";
import { ChevronContainer } from "../../components/ChevronContainer";
import { Main } from "../../components/Main";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./style";
import Menu from "../../components/Menu";
import MyProfile from "./MyProfile";
import useRequests from "../../hooks/useRequests";
import { useHistory } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState<Boolean>(false);
  const requests = useRequests(setLoading);
  const history = useHistory();
  const [userData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    } else {
      getUserData(token);
    }
  }, []);

  const getUserData = async (token: string) => {
    const response = await requests.findDataByUser(token);
    setUserData([response]);
  };

  const mockData = {
    fullName: "Cliente Teste Final",
    email: "cliente_1@email.com",
    type: "PF",
    cpfCnpj: "86581124036",
    birthday: "1991-11-20",
    nickname: "customerTest",
    status: "ACTIVE",
    active: false,
    deleted: false,
    dateCreated: "2021-09-29T20:02:30.000",
    lastUpdated: "2021-09-29T20:02:30.000",
    _id: "6154f086723a3b532f4bdb5f",
  };

  return (
    <Main>
      <ChevronContainer>
        <ul>
          <li>Pagina Inicial</li>
          <ChevronRightIcon />
          <li>Meus arremates</li>
        </ul>
      </ChevronContainer>
      <div style={{ width: "80%", margin: "0 auto", display: "flex" }}>
        <Menu />
        <MyProfile mockData={mockData} />
      </div>
    </Main>
  );
};

export default ProfilePage;
