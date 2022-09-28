import { Button } from 'antd';
import styled from 'styled-components';

import { RED } from '@utility';

export const StyledButton = styled(Button)`
  width: 100%;
  height: 3em;
  background-color: ${RED};
  color: white;
  font-size: 16px;
  border: none;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
  &:hover,
  &:focus,
  &:active {
    color: white !important;
    border-color: white !important;
    background: ${RED} !important;
  }
`;
