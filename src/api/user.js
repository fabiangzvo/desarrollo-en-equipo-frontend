import { saveToken } from "@utils/api";

import api from "./apiConfig";

const Authentication = {};

Authentication.signIn = async (username, password) => {
  const credentials = {
    username,
    password,
  };

  const response = await api.post('/prod/login', credentials);

  const { status, data } = response;

  if (status !== 200) return response;

  const { token } = data;

  saveToken(token);

  return response;
};

export default Authentication