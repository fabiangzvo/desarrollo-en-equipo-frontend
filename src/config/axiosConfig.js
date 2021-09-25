const LOCAL_STORE_TOKEN_KEY = 'token';

export const rejectResponse = error => {
  const {
    message,
    response: { status = 500, request: { responseURL } } = {},
  } = error;

  const messageError = { status, message, responseURL };

  if (!status && !message)
    return { status: 500, error: { message: 'Request error' } };

  console.error('Intercept: ', messageError);

  return messageError;
};

export const baseHeadersConfig = config => {
  const token = localStorage.getItem(LOCAL_STORE_TOKEN_KEY);

  config.headers['Authorization'] = `Bearer ${token}`;

  return config;
};
