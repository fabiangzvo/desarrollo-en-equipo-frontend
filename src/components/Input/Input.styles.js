import styled from 'styled-components';
import { Input } from 'antd';
import sizes from '@utils/sizes';

export const StyledInput = styled(Input)`
  background: ${({ theme }) => theme.background};
  border:none;
  box-sizing: border-box;
  border-radius: 5px;
  
  & .ant-input {
    border:none;
  }

  &:focus,
  &:active {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: ${sizes.sm}px) {
    font-size: 12px;
    font-weight: 400;
  }
`;
