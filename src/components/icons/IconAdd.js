import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';

const IconAdd = _ => {
  const theme = useContext(ThemeContext);

  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.302 8.588H5.003V5.366H8.207V3.665H5.003V0.452H3.302V3.665H0.08V5.366H3.302V8.588Z"
        fill={theme.primary}
      />
    </svg>
  );
};

export default IconAdd;
