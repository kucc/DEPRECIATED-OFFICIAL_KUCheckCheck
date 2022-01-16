import styled from 'styled-components';

import { MAIN_COLOR } from '@utility/COLORS';

export const StyledMainTopWrapper = styled.div`
  min-height: 18em;
  padding: 5em 21em 2em;
  height: 30em;
  border-bottom-right-radius: 67px;
  border-bottom-left-radius: 67px;
  box-shadow: 0 11px 10px 2px lightgrey;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
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
