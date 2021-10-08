import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import {
  AuthUser,
  Login,
  LoginSuccess,
  RegisterUser,
  RegisterUserErrorResponse,
} from "../config/requestTypes";

const useRequests = (setLoading: Dispatch<SetStateAction<Boolean>>) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const registerUser = async (body: RegisterUser): Promise<boolean> => {
    setLoading(true);
    const result = await axios
      .post(`${BASE_URL}/o/customer`, body)
      .then((res: AxiosResponse<Response>) => {
        return true;
      })
      .catch((err: RegisterUserErrorResponse) => {
        return false;
      });
    setLoading(false);
    return result;
  };

  const loginUser = async (body: Login) => {
    setLoading(true);
    const result = await axios
      .post(`${BASE_URL}/o/customer-login/login`, body)
      .then((res) => {
        return res.data as LoginSuccess;
      })
      .catch((err) => {
        return err;
      });
    setLoading(false);
    return result;
  };

  const findDataByUser = async (
    authorization: string
  ): Promise<AxiosResponse<AuthUser> | string> => {
    setLoading(true);
    const result = await axios
      .get(`${BASE_URL}/p/customer`, {
        headers: {
          auth: authorization,
        },
      })
      .then((res: AxiosResponse<AuthUser>) => {
        return res;
      })
      .catch((err: string) => {
        return err;
      });

    setLoading(false);
    return result;
  };

  return { registerUser, loginUser, findDataByUser };
};

export default useRequests;
