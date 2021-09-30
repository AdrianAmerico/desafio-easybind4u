import axios from "axios";
import { useState } from "react";

const useData = () => {
  const [loading, setLoading] = useState<Boolean>(false);

  const { BASE_URL } = process.env;
  const registerUser = async (): Promise<any> => {
    try {
      setLoading(true);
      const result = await axios.post(`${BASE_URL}/o/customer`);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
    }
    setLoading(false);
  };

  const loginUser = async (): Promise<any> => {
    try {
      setLoading(true);
      const result = await axios.post(`${BASE_URL}/o/customer-login/login`);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
    }
    setLoading(false);
  };

  const findDataByUser = async (): Promise<any> => {
    try {
      setLoading(true);
      const result = await axios.get(`${BASE_URL}/p/customer`);

      return result;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
    }
    setLoading(false);
  };

  return { loading, registerUser, loginUser, findDataByUser };
};

export default useData;
