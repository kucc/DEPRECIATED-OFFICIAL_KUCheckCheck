import styled from 'styled-components';

import { StyledSideMargin } from '@utility';

export const StyledMainBottomWrapper = styled(StyledSideMargin)`
  margin-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 0px;
  }
`;

export const StyledMainBottomBtnCont = styled.div`
  display: grid;
  grid-template-columns: 11.25% auto 10.52%;
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
        font-size: ${screenWidth / 45}px;
        margin-left: 20px;
        justify-content: center;
        grid-template-columns: ${screenWidth / 7}px 1px ${
        screenWidth / 7
      }px 1px ${screenWidth / 6.5}px 1px ${screenWidth / 6.5}px !important;
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
  @media (max-width: 1224px) {
    margin-left: 10px;
  }
`;

export const StyledMainSessRig = styled.div`
  a.ant-btn {
    padding-top: 5px !important;
  }
`;
