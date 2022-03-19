import styled from 'styled-components';

export const StyledCourseContainer = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  height: 120px;
  margin: 30px 0px;
  background-color: white;
  @media (max-width: 1224px) {
    grid-template-columns: 60px auto;
    height: 100%;
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
    width: 40px;
    margin-left: 20px;
  }
`;

export const StyledCourseImg = styled.img`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  width: 60px;
  z-index: 100;
  cursor: pointer;
  @media (max-width: 1224px) {
    width: 40px;
  }
`;

export const StyledCourseExplainWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 25px;
  ${({ CourseApplicationState, $isMobile }) => {
    if (!$isMobile && CourseApplicationState !== 'nonActive') {
      // courseDifficulty와 application 버튼 렌더링
      return `
        grid-template-columns: auto 200px 150px 25px;
      `;
    } else if (!$isMobile && CourseApplicationState === 'nonActive') {
      // courseDifficulty만 렌더링
      return `
        grid-template-columns: auto 200px 25px;
      `;
    } else if ($isMobile && CourseApplicationState === 'nonActive') {
      return `
      margin-top: 0px;
      grid-template-columns: auto;
      `;
    } else {
      return `
        gap: 0px;
        margin-top: 0px;
        grid-template-columns: auto 60px;
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
    padding-top: 0px;
    padding-right: 0px;
  }
`;

export const StyledCourseTitle = styled.div`
  font-family: 'NexonBo';
  font-size: 20px;
  margin-bottom: 8px;
  @media (max-width: 1224px) {
    margin-top: 5px;
    font-size: 16px;
  }
`;

export const StyledCourseExplain = styled.div`
  & > p {
    font-family: 'NexonRe';
    margin-bottom: 0px;
  }
  font-size: 13.3px;
  margin-top: -10px;
  @media (max-width: 1224px) {
    font-size: 11px;
    margin-top: -7px;
  }
`;

export const StyledCourseFavorite = styled.div``;

export const StyledDirectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  cursor: pointer;
`;
