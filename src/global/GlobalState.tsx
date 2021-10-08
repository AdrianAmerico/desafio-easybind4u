import React, { useState } from "react";
import GlobalContext from "./globalContext";
import useRequests from "../hooks/useRequests";

const GlobalState: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<Boolean>(false);

  const requests = useRequests(setLoading);

  return (
    <GlobalContext.Provider value={{ requests, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
