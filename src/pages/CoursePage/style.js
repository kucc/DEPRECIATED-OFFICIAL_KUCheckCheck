import styled from 'styled-components';

import { StyledSidePadding } from '@utility';

export const StyledCoursePageContainer = styled(StyledSidePadding)``;

export const StyledAttendanceButton = styled.div`
  position: fixed;
  width: 180px;
  right: 360px;
  bottom: 100px;
  border-radius: 32px;
  @media (max-width: 1224px) {
    width: 90px;
    right: 110px;
    bottom: 30px;
  }
`;

export const StyledRegisterButton = styled.div`
  position: fixed;
  width: 180px;
  right: 150px;
  bottom: 100px;
  border-radius: 32px;
  @media (max-width: 1224px) {
    width: 90px;
    right: 10px;
    bottom: 30px;
  }
`;
