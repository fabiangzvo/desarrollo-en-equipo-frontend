import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';

const Preferences = () => {
  const theme = useContext(ThemeContext);

  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M20.6722 9.18682C20.5031 9.08071 19.1787 8.28731 18.6523 8.0465L18 6.47184C18.1938 5.95114 18.5641 4.49046 18.622 4.23723C18.6756 4.00245 18.6049 3.75661 18.4346 3.58631L17.4146 2.56638C17.2443 2.39608 16.9984 2.32529 16.7637 2.37894C16.5716 2.42286 15.0728 2.79852 14.5291 3.00089L12.9544 2.34862C12.7239 1.84495 11.9541 0.551856 11.814 0.328773C11.686 0.124803 11.4621 0.000976562 11.2212 0.000976562H9.77872C9.53788 0.000976562 9.31393 0.124803 9.18588 0.328773C9.07978 0.497798 8.28637 1.82223 8.04557 2.34862L6.4709 3.00089C5.95021 2.8071 4.48952 2.43685 4.23629 2.37894C4.00152 2.32533 3.75567 2.39612 3.58537 2.56638L2.5654 3.58635C2.3951 3.75665 2.32431 4.00249 2.37796 4.23727C2.42189 4.4293 2.79755 5.92817 2.99992 6.47188L2.34765 8.04655C1.84398 8.27697 0.55088 9.04675 0.327796 9.18686C0.123826 9.31487 0 9.53881 0 9.77966V11.2222C0 11.463 0.123826 11.687 0.327796 11.815C0.496821 11.9211 1.82125 12.7145 2.34765 12.9553L2.99992 14.53C2.80612 15.0507 2.43587 16.5114 2.37796 16.7646C2.32435 16.9994 2.3951 17.2452 2.5654 17.4155L3.58537 18.4355C3.75567 18.6058 4.0016 18.6766 4.23629 18.6229C4.42833 18.579 5.9272 18.2034 6.4709 18.001L8.04557 18.6532C8.27599 19.1569 9.04577 20.45 9.18588 20.6731C9.31393 20.8771 9.53788 21.0009 9.77872 21.0009H11.2212C11.4621 21.0009 11.686 20.8771 11.8141 20.6731C11.9202 20.5041 12.7136 19.1796 12.9544 18.6532L14.5291 18.001C15.0498 18.1948 16.5104 18.565 16.7637 18.6229C16.9985 18.6767 17.2443 18.6058 17.4146 18.4355L18.4346 17.4155C18.6049 17.2452 18.6756 16.9994 18.622 16.7646C18.5781 16.5726 18.2024 15.0737 18 14.53L18.6523 12.9553C19.156 12.7249 20.4491 11.9551 20.6722 11.815C20.8761 11.687 21 11.463 21 11.2222V9.77966C21 9.53881 20.8761 9.31487 20.6722 9.18682ZM19.6001 10.8276H19.6C19.1013 11.1239 18.2713 11.6013 18.0111 11.7093C17.7782 11.7477 17.5729 11.9028 17.4779 12.1323L16.5876 14.2815C16.4926 14.511 16.5281 14.7658 16.6656 14.9576C16.7734 15.2183 17.0226 16.1426 17.1657 16.7046L16.7036 17.1666C16.1416 17.0236 15.2173 16.7744 14.9566 16.6666C14.7649 16.529 14.5099 16.4935 14.2805 16.5886L12.1313 17.4789C11.9019 17.5739 11.7467 17.7792 11.7083 18.0121C11.6003 18.2723 11.123 19.1023 10.8267 19.601H10.1732C9.87691 19.1023 9.39957 18.2723 9.29154 18.0121C9.25319 17.7792 9.09807 17.5739 8.86859 17.4789L6.71929 16.5886C6.48985 16.4936 6.23498 16.5291 6.04323 16.6666C5.78266 16.7744 4.85833 17.0236 4.29626 17.1666L3.83417 16.7046C3.9772 16.1426 4.22649 15.2183 4.33424 14.9576C4.47176 14.7658 4.50724 14.511 4.41221 14.2815L3.52196 12.1323C3.42689 11.9028 3.22161 11.7477 2.98876 11.7093C2.72864 11.6013 1.89869 11.1239 1.39998 10.8276V10.1742C1.89865 9.87789 2.72864 9.40055 2.98888 9.29252C3.22177 9.25417 3.42705 9.09905 3.52209 8.86956L4.41233 6.72031C4.50732 6.49087 4.47188 6.236 4.33436 6.04421C4.22657 5.78351 3.97732 4.85927 3.8343 4.29727L4.29638 3.83519C4.85833 3.97821 5.78262 4.22747 6.04331 4.33525C6.23506 4.47278 6.48993 4.50826 6.71941 4.41322L8.86867 3.52298C9.09811 3.42791 9.25323 3.22263 9.29162 2.98978C9.39957 2.72962 9.87695 1.89967 10.1733 1.40096H10.8267C11.123 1.89963 11.6003 2.72962 11.7084 2.98986C11.7467 3.22275 11.9018 3.42803 12.1313 3.52306L14.2806 4.41331C14.51 4.5083 14.7649 4.4729 14.9566 4.33534C15.2172 4.22755 16.1415 3.97834 16.7036 3.83527L17.1657 4.29736C17.0227 4.85931 16.7734 5.78359 16.6656 6.04429C16.5281 6.23608 16.4926 6.49095 16.5877 6.72039L17.4779 8.86965C17.573 9.09909 17.7783 9.25421 18.0111 9.2926C18.2714 9.40059 19.1014 9.87797 19.6 10.1743V10.8276H19.6001Z"
          fill={theme.blue.dark}
        />
        <path
          d="M10.4999 5.92249C7.97585 5.92249 5.92236 7.97597 5.92236 10.5C5.92236 13.0241 7.97585 15.0775 10.4999 15.0775C13.024 15.0775 15.0774 13.024 15.0774 10.5C15.0774 7.97593 13.024 5.92249 10.4999 5.92249ZM10.4999 13.6775C8.7478 13.6775 7.32239 12.2521 7.32239 10.5C7.32239 8.74792 8.7478 7.32251 10.4999 7.32251C12.252 7.32251 13.6774 8.74792 13.6774 10.5C13.6774 12.2521 12.252 13.6775 10.4999 13.6775Z"
          fill="#2866F6"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="21" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Preferences;
