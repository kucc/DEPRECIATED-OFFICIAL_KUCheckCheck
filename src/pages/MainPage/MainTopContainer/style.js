import styled from 'styled-components';

import { MAIN_COLOR } from '@utility/COLORS';

export const StyledMainTopWrapper = styled.div`
  min-height: 18em;
  padding: 5em 21em 2em;
  height: 30em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  @media (max-width: 1224px) {
    display: flex;
    height: 658px;
    background-color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledMainTitle1 = styled.div`
  & > p {
    font-size: 4em;
    font-weight: 700;
    font-family: NexonBo;
    color: ${MAIN_COLOR};
  }
`;

export const StyledMainTitle2 = styled.div`
  margin: -90px 0px 15px;
  & > p {
    font-size: 4em;
    font-weight: 700;
    font-family: NexonBo;
  }
`;

export const StyledMainExplain = styled.div`
  margin: -60px 0px 15px;
  & > p {
    font-size: 17px;
    word-spacing: 1.2px;
    font-family: NexonRe;
  }
`;
