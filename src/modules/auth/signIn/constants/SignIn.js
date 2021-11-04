import React from 'react';

import IconName from '@icons/IconName';
import IconPassword from '@icons/IconPassword';

export const FORM_ITEMS = [
  {
    name: 'username',
    ruleMessage: 'El correo electrónico es obligatorio',
    placeholder: 'Correo electrónico',
    prefix: <IconName />,
    type: 'input',
  },
  {
    name: 'password',
    ruleMessage: 'Por favor ingrese la contraseña',
    placeholder: 'Contraseña',
    prefix: <IconPassword />,
    type: 'password',
  },
];

export const INITIAL_STATE = {
  email: '',
  password: '',
};

export const SIGN_IN_LABEL = 'INICIAR SESIÓN';

export const REMEMBER_PASSWORD = '¿ Olvidaste tu contraseña ? ';

export const REGISTER_LABEL = 'Registrate';

export const REGISTER_ANNOUNCEMENT = '¿No tienes una cuenta?';

export const GOOGLE_LABEL = 'Usar cuenta de Google';

export const REMEMBER_PASSWORD_PATH = '/auth/remember-password';

export const SIGN_UP_PATH = '/auth/sign-up';

export const UNAUTHORIZE_MESSAGE =
  'El nombre de usuario o contraseña son incorrectos.';

export const INTERNAL_ERROR_MESSAGE =
  'Ha ocurrido un error inesperado, porfavor intente mas tarde.';

export const GREETING = 'BIENVENIDO DE NUEVO'

export const LOGIN_LABEL = 'INICIO DE SESION'