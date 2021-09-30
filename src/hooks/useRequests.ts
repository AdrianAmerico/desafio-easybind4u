import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import {
  RegisterUser,
  RegisterUserErrorResponse,
} from "../config/requestTypes";

const useRequests = (setLoading: Dispatch<SetStateAction<Boolean>>) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const registerUser = async (
    body: RegisterUser
  ): Promise<AxiosResponse<Response> | RegisterUserErrorResponse> => {
    setLoading(true);
    const result = await axios
      .post(`${BASE_URL}/o/customer`, body)
      .then((res: AxiosResponse<Response>) => {
        return res;
      })
      .catch((err: RegisterUserErrorResponse) => {
        return err;
      });
    setLoading(false);
    return result;
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

  return { registerUser, loginUser, findDataByUser };
};

export default useRequests;
