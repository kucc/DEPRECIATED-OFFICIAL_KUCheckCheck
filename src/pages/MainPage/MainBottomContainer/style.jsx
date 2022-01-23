import styled from 'styled-components';

import { StyledSideMargin } from '@utility/COMMON_STYLE';

export const StyledMainBottomWrapper = styled(StyledSideMargin)`
  margin-top: 100px;
  padding-bottom: 30px;
`;

export const StyledMainBottomBtnCont = styled.div`
  display: grid;
  grid-template-columns: 11.25% auto 10.52%;
  min-width: 1100px;
`;

export const StyledMainSessDuration = styled.div``;

export const StyledMainSessTab = styled.div`
  margin-left: 50px;
  display: grid;
  grid-template-columns: 100px 1px 100px 1px 100px 1px 100px;
`;

export const StyledMainSessRig = styled.div`
  a.ant-btn {
    padding-top: 5px !important;
  }
`;
