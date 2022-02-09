import { Button } from 'antd';
import styled from 'styled-components';

import { MAIN_COLOR } from '@utility/COLORS';

export const StyledButton = styled(Button)`
  width: 100%;
  height: 3em;
  background-color: ${MAIN_COLOR};
  color: white;
  font-size: 16px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;
