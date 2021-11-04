import React from 'react';

import themes from '@styles/themes';

const theme = themes('themes');

const ViewRow = () => (
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
      d="M4.50019 2H19.5525C20.904 2 22.0004 3.1059 22.0004 4.47018V7.7641C22.0004 9.12735 20.904 10.2343 19.5525 10.2343H4.50019C3.14765 10.2343 2.05127 9.12735 2.05127 7.7641V4.47018C2.05127 3.1059 3.14765 2 4.50019 2Z"
      stroke={theme.grey.secondary.dark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.44892 13.7657H19.5524C20.9039 13.7657 22.0002 14.8716 22.0002 16.2369V19.5298C22.0002 20.8941 20.9039 22 19.5524 22H4.44892C3.09638 22 2 20.8941 2 19.5298V16.2369C2 14.8716 3.09638 13.7657 4.44892 13.7657Z"
      stroke={theme.grey.secondary.dark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ViewRow;
