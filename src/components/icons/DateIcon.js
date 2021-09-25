import React from 'react';

import { XMLNS, DATE_ICON_PATHS } from './Paths';

const DateIcon = () => (
  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns={XMLNS}>
    <path
      d={DATE_ICON_PATHS.d}
      fill={DATE_ICON_PATHS.fill}
      stroke={DATE_ICON_PATHS.stroke}
      strokeWidth="0.5"
    />
  </svg>
);

export default DateIcon;
