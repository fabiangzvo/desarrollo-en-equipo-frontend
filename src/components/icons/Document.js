import React from 'react';

const Document = props => {
  const { width, height } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.736 2.76196H8.084C6.025 2.76196 4.25 4.43096 4.25 6.49096V17.228C4.25 19.404 5.908 21.115 8.084 21.115H16.072C18.132 21.115 19.802 19.288 19.802 17.228V8.03796L14.736 2.76196Z"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4736 2.75024V5.65924C14.4736 7.07924 15.6226 8.23124 17.0426 8.23424C18.3586 8.23724 19.7056 8.23824 19.7966 8.23224"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9993 14.179L13.7393 15.094C13.9023 15.179 14.0933 15.041 14.0623 14.86L13.7293 12.921L15.1383 11.55C15.2703 11.421 15.1973 11.198 15.0153 11.171L13.0693 10.888L12.1983 9.12399C12.1173 8.95899 11.8823 8.95899 11.8003 9.12399L10.9293 10.888L8.98432 11.171C8.80232 11.198 8.72932 11.421 8.86132 11.55L10.2693 12.921L9.93632 14.86C9.90532 15.041 10.0963 15.179 10.2593 15.094L11.9993 14.179Z"
        stroke="#200E32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Document.defaultProps = {
  width: 40,
  height: 40,
};

export default Document;
