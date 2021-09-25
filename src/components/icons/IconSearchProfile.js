import React from 'react';

import themes from '../../styles/themes';

const theme = themes('white');

const IconSearchProfile = props => {
  const { fill } = props;

  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          opacity="0.95"
          d="M18.0867 7.51552L15.4177 4.5962C15.2905 4.45704 15.1178 4.37891 14.9378 4.37891H12.9474V2.20177C12.9474 1.79198 12.6435 1.45959 12.2689 1.45959H10.2783V0.742188C10.2783 0.332245 9.97458 0 9.59978 0C9.22497 0 8.92121 0.332245 8.92121 0.742188V1.45959H4.26173C4.08175 1.45959 3.90905 1.53786 3.78182 1.67702L1.11286 4.59634C0.847796 4.88612 0.847796 5.35607 1.11286 5.64584L3.78182 8.56516C3.90905 8.70432 4.08175 8.7826 4.26173 8.7826H6.25225V10.9597C6.25225 11.3695 6.55601 11.7019 6.93082 11.7019H8.92121V17.5156H5.59621C5.2214 17.5156 4.91763 17.8479 4.91763 18.2578C4.91763 18.6678 5.2214 19 5.59621 19H13.6033C13.9782 19 14.2819 18.6678 14.2819 18.2578C14.2819 17.8479 13.9782 17.5156 13.6033 17.5156H10.2783V11.7018H14.9378C15.1178 11.7018 15.2905 11.6236 15.4177 11.4845L18.0867 8.56516C18.3518 8.27539 18.3518 7.80544 18.0867 7.51552ZM4.54283 7.29823L2.55231 5.12109L4.54283 2.94396H11.5903V4.37891H6.93069C6.55601 4.37891 6.25211 4.71115 6.25211 5.12109V7.29823H4.54283ZM14.6569 10.2174H7.60926V5.86328H14.6569L16.6472 8.04041L14.6569 10.2174Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="17.3714"
            height="19"
            fill="white"
            transform="translate(0.914062)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

IconSearchProfile.defaultProps = {
  fill: theme.grey.secondary.dark,
};

export default IconSearchProfile;
