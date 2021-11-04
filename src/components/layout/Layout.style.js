import styled from 'styled-components';
import sizes from '@utils/sizes';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  text-align: center;
  width: 100%;
  height: 100vh;
  font-family: 'Manrope', sans-serif;

  input {
    font-size: 14px;
  }

  .ant-form-item-explain {
    padding: 2px 10px;
    text-align: left;
  }

  .ant-form-item-explain > div {
    font-size: 12px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.white} inset;
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.white} inset;
  }

  @media screen and (max-width: ${sizes.sm}px) {
    grid-template-columns: 1fr;

    & > div:first-of-type {
      width: 100%;
    }
  }
`;

export const LeftDrawer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 0.6rem;
  background: ${({ theme }) => theme.secondary};
  background-size: 600% 600%;

  -webkit-animation: backgroundAnimation 26s ease infinite;
  -moz-animation: backgroundAnimation 26s ease infinite;
  animation: backgroundAnimation 26s ease infinite;

  @keyframes backgroundAnimation {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }

  & > div {
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    line-height: 0.8em;
    font-weight: 800;
    color: white;
    margin-bottom: 0;
    margin-left: 0.5rem;
  }

  h2 {
    font-weight: 500;
    color: white;
    margin-left: 0.5rem;
    text-align: left;
  }

  @media screen and (max-width: ${sizes.lg}px) {
    width: 100%;
  }

  @media screen and (max-width: ${sizes.md}px) {
    width: 100%;

    & > div {
      height: 100%;
      width: 80%;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: ${sizes.sm}px) {
    display: none;
  }

  @media screen and (max-width: ${sizes.xs}px) {
    display: none;
  }
`;
