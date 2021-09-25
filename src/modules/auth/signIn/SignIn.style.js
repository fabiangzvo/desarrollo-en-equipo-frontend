import styled from 'styled-components';
import { Link } from 'react-router-dom';

import sizes from '@utils/sizes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 15px;
  font-family: 'Manrope', sans-serif;
  color: #858585;

  .ant-form-item,
  .ant-form-item-control-input-content,
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .ant-input-prefix {
    width: 30px;
  }

  .ant-form-item {
    margin-bottom: 16px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 60%;
    width: 60%;
  }

  & > div > svg {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: ${sizes.md}px) {
    & > div {
      width: calc(100% - 90px);
    }

    label {
      width: calc(100% + 90px);
    }
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  cursor: pointer;
  width: auto;
  color: ${({ theme, error }) => (error ? '#c70000' : theme.primary)};
  font-weight: ${({ bold }) => (bold ? '600' : '500')};
  display: ${({ error }) => !error && 'flex'};
  justify-content: center;
  margin-top: ${({ top }) => (top ? '0' : '20px')};

  &:hover {
    color: ${({ theme, error }) => (error ? theme.tertiary : theme.primary)};
  }
`;

export const StyledText = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 4em;
  font-weight: 500;
`;

export const ErrorBox = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.secondary};
  padding: 1em;
  width: 100%;
`;
