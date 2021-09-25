import React, { useContext } from 'react';

import { ThemeContext } from '@emotion/core';

const Star = ({ w, selected }) => {
  const theme = useContext(ThemeContext);

  const primary = selected ? theme.yellow.medium : theme.white;
  const secondary = selected ? theme.yellow.dark : '#B8BCC6';

  return (
    <svg width={w} viewBox="0 0 42 38">
      <path
        d="M21 1.55166L25.466 14.6718L25.5813 15.0106H25.9393H40.3249L28.707 23.0679L28.3971 23.2828L28.5186 23.6398L32.9688 36.7134L21.2849 28.6104L21 28.4128L20.7151 28.6104L9.03123 36.7134L13.4814 23.6398L13.6029 23.2828L13.293 23.0679L1.67509 15.0106H16.0607H16.4187L16.534 14.6718L21 1.55166Z"
        fill={primary}
        stroke={secondary}
      />
    </svg>
  );
};

Star.defaultProps = {
  w: '40',
  selected: false,
};

export default Star;
