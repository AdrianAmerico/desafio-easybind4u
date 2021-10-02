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

  const loginUser = async (
    body: Login
  ): Promise<AxiosResponse<LoginSuccess> | Response> => {
    setLoading(true);
    const result = await axios
      .post(`${BASE_URL}/o/customer-login/login`, body)
      .then((res: AxiosResponse<LoginSuccess>) => {
        return res;
      })
      .catch((err: Response) => {
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
