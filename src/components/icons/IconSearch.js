import React from 'react';

import themes from '@styles/themes';

const theme = themes('white');

const IconSearch = () => {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="7.08616"
        cy="6.84442"
        rx="5.47874"
        ry="5.99237"
        stroke={theme.grey.secondary.dark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M10.8965 11.3235L13.0445 13.6667"
        stroke={theme.grey.secondary.dark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSearch;
