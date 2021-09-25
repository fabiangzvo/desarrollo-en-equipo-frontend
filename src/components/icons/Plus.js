import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';

import { PLUS_PATHS, XMLNS } from './Paths';

const Plus = () => {
  const theme = useContext(ThemeContext);

  return (
    <svg
      xmlns={XMLNS}
      version="1.1"
      width="18"
      height="20"
      x="0"
      y="0"
      viewBox="0 0 512 512"
    >
      <g>
        <path
          xmlns={XMLNS}
          d={PLUS_PATHS.d1}
          fill={theme.primary}
          data-original={theme.black.dark}
        />
        <path
          xmlns={XMLNS}
          d={PLUS_PATHS.d2}
          fill={theme.primary}
          data-original={theme.black.dark}
        />
        <path
          xmlns={XMLNS}
          d={PLUS_PATHS.d3}
          fill={theme.primary}
          data-original={theme.black.dark}
        />
      </g>
    </svg>
  );
};

export default Plus;
