import React, { useState } from 'react';

import Form from '@components/Form/Form';
import Layout from '@components/layout/Layout.component';

import * as constants from './constants/SignIn';
import { Wrapper, StyledLink, StyledText, ErrorBox } from './SignIn.style';

const checkMessage = status => {
  switch (status) {
    case 401:
      return (
        <ErrorBox>
          {constants.UNAUTHORIZE_MESSAGE}&nbsp;
          <br />
          <StyledLink error={1} bold={1} to={constants.REMEMBER_PASSWORD_PATH}>
            {constants.REMEMBER_PASSWORD}
          </StyledLink>
        </ErrorBox>
      );
    case 500:
      return <ErrorBox>{constants.INTERNAL_ERROR_MESSAGE}</ErrorBox>;
    default:
      return null;
  }
};

function SignIn() {
  const [status, setStatus] = useState(401);

  const handleSubmit = async credentials => {
    console.log({ credentials })
    setStatus(500)
  };

  return (
    <Layout>
      <Wrapper>
        <div>
          {checkMessage(status)}
          <h1>{constants.GREETING}</h1>
          <h3>{constants.LOGIN_LABEL}</h3>
          <Form
            onFinish={handleSubmit}
            formItems={constants.FORM_ITEMS}
            initialState={constants.INITIAL_STATE}
            buttonLabel={constants.SIGN_IN_LABEL}
          />
          <StyledLink to={constants.REMEMBER_PASSWORD_PATH}>
            {constants.REMEMBER_PASSWORD}
          </StyledLink>
          <StyledText>
            {constants.REGISTER_ANNOUNCEMENT}&ensp;
            <StyledLink top={1} bold={1} to={constants.SIGN_UP_PATH}>
              {constants.REGISTER_LABEL}
            </StyledLink>
          </StyledText>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default SignIn;
