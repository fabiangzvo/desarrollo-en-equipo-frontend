import React from 'react';

const Description = props => {
  const { width, height } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.736 0.761902H5.084C3.025 0.761902 1.25 2.4309 1.25 4.4909V15.2279C1.25 17.4039 2.908 19.1149 5.084 19.1149H13.072C15.132 19.1149 16.802 17.2879 16.802 15.2279V6.0379L11.736 0.761902Z"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4736 0.750183V3.65918C11.4736 5.07918 12.6226 6.23118 14.0426 6.23418C15.3586 6.23718 16.7056 6.23818 16.7966 6.23218"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.54779 13.0344C8.25423 13.3267 8.25314 13.8015 8.54536 14.0951C8.83759 14.3887 9.31246 14.3897 9.60602 14.0975L12.457 11.2595C12.5984 11.1188 12.6779 10.9275 12.6779 10.728C12.6779 10.5286 12.5985 10.3373 12.4571 10.1965L9.60611 7.35753C9.3126 7.06525 8.83773 7.06626 8.54546 7.35977C8.25318 7.65328 8.25418 8.12815 8.54769 8.42042L10.1119 9.97809L5.35449 9.97809C4.94028 9.97809 4.60449 10.3139 4.60449 10.7281C4.60449 11.1423 4.94028 11.4781 5.35449 11.4781L10.1113 11.4781L8.54779 13.0344Z"
        fill="#200E32"
      />
    </svg>
  );
};

Description.defaultProps = {
  width: 40,
  height: 40,
};

export default Description;
