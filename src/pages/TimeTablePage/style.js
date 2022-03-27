import styled from 'styled-components';

import { StyledSideMargin } from '@utility';

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const StyledTimeTableBox = styled(StyledSideMargin)`
  display: grid;
  grid-template-rows: 100px auto;
`;

export const StyledTimeTableBackground = styled.div`
  background-color: white;
  padding-bottom: 50px;
`;

export const StyledTimeTableText = styled.div`
  margin-left: 5%;
  font-family: 'NexonBo';
  margin-top: 50px;
  font-size: 26px;
`;
