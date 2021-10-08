import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  width: 100%;
  background: ${({ theme, type }) => type === 'primary' && theme.secondary};
  border-radius: 15px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 10px;
  color:${({ theme }) => theme.background};
  border:none;
  cursor: pointer;
`;
