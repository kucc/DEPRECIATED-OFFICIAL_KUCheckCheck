import styled from 'styled-components';

import { BASE_COLOR } from '@utility/COLORS';

export const StyledPeriodContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const StyledPeriod = styled.div`
  display: flex;
  width: 450px;
  height: 60px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  @media (max-width: 1224px) {
    width: 300px;
    height: 50px;
    font-size: 12px;
  }
`;

export const StyledPeriodTitle = styled.span`
  font-family: 'NexonBo';
`;
