import React, { useState } from "react";

const useData = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const links = {
    baseUrl:
      "http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api",
    link1:
      "http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api/o/customer",
    link2:
      "http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api/o/customer-login/login",
    link3:
      "http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api/p/customer",
  };

  const registerUser = async (): Promise<any> => {};
};

export default useData;
