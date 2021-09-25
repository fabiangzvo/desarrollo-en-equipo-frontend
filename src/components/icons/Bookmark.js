import React from 'react';

const Bookmark = props => {
  const { primary, secondary, width, height } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1786 17.8553L5.49438 20.9693C5.04054 21.2052 4.48142 21.0382 4.23122 20.5921V20.5921C4.15884 20.4539 4.11978 20.3007 4.11719 20.1447V6.3465C4.11719 3.71492 5.91543 2.66229 8.50315 2.66229H14.5821C17.0909 2.66229 18.9681 3.64475 18.9681 6.17106V20.1447C18.9681 20.3937 18.8692 20.6324 18.6932 20.8084C18.5171 20.9845 18.2784 21.0833 18.0295 21.0833C17.8707 21.0808 17.7146 21.0418 17.5733 20.9693L11.854 17.8553C11.6433 17.7414 11.3893 17.7414 11.1786 17.8553Z"
        stroke={primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M8.02051 8.9342H15.0117"
        stroke={secondary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Bookmark.defaultProps = {
  primary: '#200E32',
  secondary: '#200E32',
  width: 40,
  height: 40,
};

export default Bookmark;
