import React from 'react';

const checkRound = round => {
  if (round)
    return (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.4788 11.0004C19.4788 15.6837 15.6829 19.4796 10.9997 19.4796C6.31642 19.4796 2.52051 15.6837 2.52051 11.0004C2.52051 6.31716 6.31642 2.52124 10.9997 2.52124C15.6829 2.52124 19.4788 6.31716 19.4788 11.0004Z"
          stroke="#200E32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M14.1453 13.6977L10.6895 11.6361V7.19299"
          stroke="#200E32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    );

  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6537 2.63562H7.34595C4.45083 2.63562 2.63574 4.6855 2.63574 7.58637V15.414C2.63574 18.3149 4.44124 20.3648 7.34595 20.3648H15.6528C18.5575 20.3648 20.3649 18.3149 20.3649 15.414V7.58637C20.3649 4.6855 18.5575 2.63562 15.6537 2.63562Z"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M14.7497 13.4337L11.5 11.495V7.31567"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
};

const Time = props => {
  const { round, width, height } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {checkRound(round)}
    </svg>
  );
};

Time.defaultProps = {
  round: false,
  width: 40,
  height: 40,
};

export default Time;
