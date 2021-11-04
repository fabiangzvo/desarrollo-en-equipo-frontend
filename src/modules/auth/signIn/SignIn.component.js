import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Form from '@components/Form/Form';
import Layout from '@components/layout/Layout.component';
import userApi from "@/api/user";

import * as constants from './constants/SignIn';
import { Wrapper, StyledLink, StyledText, ErrorBox, StyledH1, StyledH2 } from './SignIn.style';

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
  const [status, setStatus] = useState(0);

  const history = useHistory()

  const handleSubmit = async credentials => {
    const { username, password } = credentials

    const response = await userApi.signIn(username, password)
    const { status } = response

    if (status !== 200) return setStatus(status)
    

    return history.push("/home")
  };
  return (
    <Layout>
      <Wrapper>
        <div>
          {checkMessage(status)}
          <StyledH1>{constants.GREETING}</StyledH1>
          <StyledH2>{constants.LOGIN_LABEL}</StyledH2>
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
