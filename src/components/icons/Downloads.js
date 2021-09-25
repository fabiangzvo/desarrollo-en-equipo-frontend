import React from 'react';

const Downloads = props => {
  const { width, height } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.38866 17.7083H13.6128C16.1295 17.7083 17.7087 15.9258 17.7087 13.4033V6.59663C17.7087 4.07413 16.1378 2.29163 13.6128 2.29163H6.38866C3.86366 2.29163 2.29199 4.07413 2.29199 6.59663V13.4033C2.29199 15.9258 3.86366 17.7083 6.38866 17.7083Z"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0007 13.405V6.59497"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1236 10.2686L10.0003 13.4052L6.87695 10.2686"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Downloads.defaultProps = {
  width: 40,
  height: 40,
};

export default Downloads;
