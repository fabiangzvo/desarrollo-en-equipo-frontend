import { saveToken } from "@utils/api";

import api from "./apiConfig";

const Authentication = {};

Authentication.signIn = async (email, password) => {
  const credentials = {
    email,
    password,
  };

  const response = await api.post('/auth/sign-in', credentials);

  const { status, data } = response;

  if (status !== 200) return response;

  const { token } = data;

  saveToken(token);

  return response;
};

export default Authentication