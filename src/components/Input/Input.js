import React from 'react';

import { StyledInput } from './Input.styles';

function Input(props) {
  return <StyledInput {...props} />;
}

Input.defaultProps = {
  type: 'text',
  size: 'large',
};

export default Input;
