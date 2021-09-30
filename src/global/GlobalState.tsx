import React from "react";
import GlobalContext from "./globalContext";
import useData from "../hooks/useData";

const GlobalState: React.FC = ({ children }) => {
  const requests = useData();
  return (
    <GlobalContext.Provider value={requests}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
