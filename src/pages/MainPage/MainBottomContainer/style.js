import styled from 'styled-components';

import { StyledSideMargin } from '@utility/COMMON_STYLE';

export const StyledMainBottomWrapper = styled(StyledSideMargin)`
  margin-top: 100px;
  padding-bottom: 30px;
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    padding-bottom: 30px;
    justify-content: center;
  }
`;

export const StyledMainBottomBtnCont = styled.div`
  display: grid;
  grid-template-columns: 11.25% auto 10.52%;
  min-width: 1100px;
  @media (max-width: 1224px) {
    display: flex;
    min-width: 0px;
    justify-content: center;
  }
`;

export const StyledMainSessDuration = styled.div``;

export const StyledMainSessTab = styled.div`
  margin-left: 50px;
  display: grid;
  grid-template-columns: 100px 1px 100px 1px 100px 1px 100px;
  ${({ screenWidth }) => {
    if (screenWidth < 740) {
      return `
      @media (max-width: 1224px) {
        margin-left: 30px;
        justify-content: center;
        grid-template-columns: ${screenWidth / 8}px 1px ${
        screenWidth / 8
      }px 1px ${screenWidth / 8}px 1px ${screenWidth / 8}px !important;
      }
    `;
    } else {
      return `
      @media (max-width: 1224px) {
        margin-left: 30px;
        justify-content: center;
        grid-template-columns: 100px 1px 100px 1px 100px 1px 100px;
      }
      `;
    }
  }}
`;

export const StyledMainSessRig = styled.div`
  a.ant-btn {
    padding-top: 5px !important;
  }
`;
