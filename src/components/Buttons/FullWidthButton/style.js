import { Button } from 'antd';
import styled from 'styled-components';

import { MAIN_COLOR } from '@utility';

export const StyledButton = styled(Button)`
  width: 100%;
  height: 3em;
  background-color: ${MAIN_COLOR};
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
    background: ${MAIN_COLOR} !important;
  }
`;
