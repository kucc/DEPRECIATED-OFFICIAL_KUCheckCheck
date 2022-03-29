import styled from 'styled-components';

import { MAIN_COLOR } from '@utility';

export const StyledMainTopWrapper = styled.div`
  min-height: 18em;
  padding: 3.5em 21em 2em;
  height: 30em;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  background-color: white;

  @media (max-width: 1224px) {
    display: flex;
    height: auto;
    background-color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const StyledMainTitle1 = styled.div`
  & > p {
    ${({ screenWidth }) => {
      if (screenWidth < 1224) {
        return `
          font-size: ${screenWidth / 10}px;
        `;
      }
    }}
    font-size: 3.5em;
    font-family: NexonBo;
    color: ${MAIN_COLOR};
    @media (max-width: 1224px) {
      margin-bottom: -55px;
    }
  }
`;

export const StyledMainTitle2 = styled.div`
  margin: -80px 0px 15px;
  & > p {
    ${({ screenWidth }) => {
      if (screenWidth < 1224) {
        return `
          font-size: ${screenWidth / 10}px;
        `;
      }
    }}
    font-size: 3.5em;
    font-family: NexonBo;
    padding: 10px 0;
    @media (max-width: 1224px) {
      padding: 30px 0px;
    }
  }
  @media (max-width: 1224px) {
    margin-top: 0px;
  }
`;

export const StyledMainExplain = styled.div`
  margin: -60px 0px 15px;
  & > p {
    font-size: 15px;
    word-spacing: 1.2px;
    font-family: NexonRe;
  }

  @media (max-width: 1224px) {
    margin: -60px 90px 20px;
    & > p {
      font-size: 12px;
    }
  }
`;
