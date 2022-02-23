import { Button } from 'antd';
import styled from 'styled-components';

import { MAIN_COLOR } from '@utility/COLORS';

export const StyledCourseContainer = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  height: 120px;
  margin: 30px 0px;
  background-color: white;
  @media (max-width: 1224px) {
    grid-template-columns: 100px auto;
    margin: 10px 0px;
  }
`;

export const StyledCourseImgContainer = styled.div`
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1224px) {
    width: 80%;
    margin-left: 30px;
  }
`;

export const StyledCourseExplainWrapper = styled.div`
  display: grid;
  margin-top: 25px;
  ${({ CourseApplicationState, $isMobile }) => {
    if (!$isMobile && CourseApplicationState) {
      return `
        grid-template-columns: auto 250px 150px 30px;
      `;
    } else if (!$isMobile && !CourseApplicationState) {
      return `
        grid-template-columns: auto 250px;
      `;
    } else {
      return `
        margin-top: 0px;
        grid-template-columns: auto 70px;
      `;
    }
  }};
`;

export const StyledCourseText = styled.div`
  padding-right: 10px;
  padding-left: 20px;
  padding-top: 5px;
  cursor: pointer;
  @media (max-width: 1224px) {
    padding-right: 0px;
  }
`;

export const StyledCourseTitle = styled.div`
  & > div {
    font-family: 'NexonBo';
    font-size: 26px;
    margin-bottom: 5px;
    @media (max-width: 1224px) {
      margin-top: 25px;
      font-size: 20px;
    }
  }
`;

export const StyledCourseExplain = styled.div`
  & > p {
    font-family: 'NexonRe';
  }
  font-size: 13.3px;
  margin-top: -10px;
  @media (max-width: 1224px) {
    font-size: 11px;
    margin-top: -7px;
  }
`;

export const StyledCourseFavorite = styled.div``;

export const StyledCourseApply = styled.button`
  margin-right: 25px;
  border-radius: 30px;
  height: 64px;
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
  cursor: pointer;
  &:hover {
    background-color: #393838;
  }
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  ${({ $isMobile, $isMainScreen }) => mainScreenStyle($isMobile, $isMainScreen)}
`;

export const StyledCourseApplyLock = styled(StyledCourseApply)`
  display: flex !important;
  background-color: #3f3f3f;
  color: white;
  font-size: 14px;
  gap: 7px;
  cursor: not-allowed;
  ${({ $isMobile, $isMainScreen }) => mainScreenStyle($isMobile, $isMainScreen)}
`;
