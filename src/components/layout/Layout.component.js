import React from 'react';

import { Container, LeftDrawer } from './Layout.style';
import * as constants from './constants/Layout';

export default function Layout(props) {
  const { children, description } = props;

  return (
    <Container>
      <LeftDrawer>
        <div>
          <h1>{constants.PRIMARY_TEXT}</h1>
          <h2>{description || constants.SECONDARY_TEXT}</h2>
        </div>
      </LeftDrawer>
      {children}
    </Container>
  );
}
