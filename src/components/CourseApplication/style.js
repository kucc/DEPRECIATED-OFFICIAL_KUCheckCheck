import styled from 'styled-components';

import { MAIN_COLOR } from '@utility';

export const StyledCourseApply = styled.button`
  margin-right: 25px;
  border-radius: 30px;
  height: 56px;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  border: none;
  padding-top: 3px;
  @media (max-width: 1224px) {
    margin-right: 0px;
    width: 50%;
    height: 80px;
    display: flex;
    gap: 10px;
    border-radius: 0px;
    padding-top: 0px;
    border-bottom-right-radius: 30px;
    justify-content: center;
    align-items: flex-end;
    font-size: 10px !important;
    padding: 5.111px;
  }
`;

export const StlyedHeadCountText = styled.div`
  font-size: 14px;
  @media (max-width: 1224px) {
    font-size: 10px;
  }
`;

const mainScreenStyle = (isMobile, isMainScreen) => {
  if (isMobile && !isMainScreen) {
    return `
      display: grid;
      place-items: center;
      width: 100%;
      border-radius: 30px;
      height: 48px;
      gap: 0px;
  `;
  }
};

export const StyledCourseApplyOn = styled(StyledCourseApply)`
  background-color: ${MAIN_COLOR};
  color: white;
  &:hover {
    background-color: #e8463a;
  }
  transition: background-color 0.3s ease;
  ${({ $isMobile, $isMainScreen }) => mainScreenStyle($isMobile, $isMainScreen)}
`;

export const StyledCourseApplyOff = styled(StyledCourseApply)`
  background-color: #656565 !important;
  color: white !important;
  cursor: not-allowed;
  ${({ $isMobile, $isMainScreen }) => mainScreenStyle($isMobile, $isMainScreen)}
`;

export const StyledCourseApplyMy = styled(StyledCourseApply)`
  background-color: #212121;
  color: white;
  cursor: auto;
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  ${({ $isMobile, $isMainScreen }) => mainScreenStyle($isMobile, $isMainScreen)}
`;

export const StyledCourseApplyLock = styled(StyledCourseApply)`
  display: flex !important;
  background-color: #3f3f3f;
  color: white;
  font-size: 12px;
  gap: 7px;
  cursor: not-allowed;
  ${({ $isMobile, $isMainScreen }) => mainScreenStyle($isMobile, $isMainScreen)}
`;

export const StyledCourseLockText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledCourseApplyCancel = styled(StyledCourseApply)`
  background-color: #f5f5f5;
  color: black;
  font-family: 'NexonBo'
    ${({ $isMobile, $isMainScreen }) =>
      mainScreenStyle($isMobile, $isMainScreen)};
  &:hover {
    color: ${MAIN_COLOR};
  }
  @media (max-width: 1224px) {
    background-color: #212121;
    color: white;
  }
`;
