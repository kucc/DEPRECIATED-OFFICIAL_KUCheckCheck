import { Button } from 'antd';
import styled from 'styled-components';

export const StyledCourseContainer = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  height: 120px;
  margin: 30px 0;
  background-color: white;
  @media (max-width: 1224px) {
    grid-template-columns: 100px auto;
    width: 120%;
    margin: 30px -10%;
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
  ${({ CourseApplicationState, isMobile }) => {
    if (!isMobile && CourseApplicationState) {
      return `
        grid-template-columns: auto 250px 150px 30px;
      `;
    } else if (!isMobile && !CourseApplicationState) {
      return `
        grid-template-columns: auto 250px;
      `;
    } else {
      return `
        grid-template-columns: auto;
      `;
    }
  }};
`;

export const StyledCourseText = styled.div`
  padding-right: 10px;
  padding-left: 20px;
  padding-top: 5px;
  cursor: pointer;
`;

export const StyledCourseTitle = styled.div`
  & > div {
    font-family: 'NexonBo';
    font-size: 26px;
    margin-bottom: 5px;
  }
`;

export const StyledCourseExplain = styled.div`
  & > p {
    font-family: 'NexonRe';
  }
  font-size: 13.3px;
  margin-top: -10px;
`;

export const StyledCourseFavorite = styled.div``;

export const StyledCourseApplyOn = styled(Button)`
  margin-right: 25px;
  border-radius: 30px;
  height: 64px;
  display: grid;
  place-items: center;
  background-color: #c32020;
  font-size: 16px;
  width: 100%;
  /* -webkit-transition: background-color 1.5s;
  transition: background-color 1.5s; */
`;

export const StyledCourseApplyOff = styled.button`
  margin-right: 25px;
  border-radius: 30px;
  height: 64px;
  display: grid;
  place-items: center;
  background-color: #656565;
  color: white;
  font-size: 16px;
  cursor: not-allowed;
  width: 100%;
  /* -webkit-transition: background-color 1.5s;
  transition: background-color 1.5s; */
`;

export const StyledCourseApplyMy = styled.button`
  margin-right: 25px;
  border-radius: 30px;
  height: 64px;
  display: grid;
  place-items: center;
  background-color: #212121;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #393838;
  }
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
`;

export const StyledCourseApplyLock = styled.button`
  margin-right: 25px;
  border-radius: 30px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f3f3f;
  color: white;
  font-size: 14px;
  gap: 7px;
  cursor: not-allowed;
  width: 100%;
`;
