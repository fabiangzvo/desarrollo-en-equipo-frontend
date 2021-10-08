import React from 'react';

import themes from '@styles/themes';

const theme = themes('white');

const IconTwoColumns = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 19.5002L2 4.4479C2 3.09638 3.1059 2 4.47018 2L7.7641 2C9.12735 2 10.2343 3.09638 10.2343 4.4479L10.2343 19.5002C10.2343 20.8528 9.12735 21.9492 7.7641 21.9492L4.47018 21.9492C3.1059 21.9492 2 20.8528 2 19.5002Z"
      stroke={theme.grey.secondary.dark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7656 19.5513L13.7656 4.44789C13.7656 3.09637 14.8715 1.99999 16.2368 1.99999L19.5297 1.99999C20.894 1.99999 21.9999 3.09637 21.9999 4.44789L21.9999 19.5513C21.9999 20.9039 20.894 22.0002 19.5297 22.0002L16.2368 22.0002C14.8715 22.0002 13.7656 20.9039 13.7656 19.5513Z"
      stroke={theme.grey.secondary.dark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconTwoColumns;
