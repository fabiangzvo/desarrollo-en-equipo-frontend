import React from 'react';

import { StyledButton } from './Button.styles';

function Button(props) {
  const { children, textColor, borderColor, ...restProps } = props;

  return (
    <StyledButton
      className="login-form-button"
      {...restProps}
      tcolor={textColor}
      bcolor={borderColor}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'default',
  size: 'large',
};

export default Button;
