import styled from 'styled-components';

import { MAIN_COLOR } from '@utility';

export const StyledCourseDifficulty = styled.div`
  height: 56px;
  background-color: rgb(245, 245, 245) !important;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  @media (max-width: 1224px) {
    ${({ isMobile, isMainScreen }) => {
      if (isMobile) {
        if (isMainScreen) {
          return `    
          margin-top: 0px;
          margin-right: 0px;
          width: 50% !important;
          height: 80px;
          padding: 5.111px;
          align-items: flex-end;
          font-size: 10px;
      `;
        } else {
          return `
          width: 100%;
          padding: 0px;
          height: 48px;
          align-items: center;
          font-size: 10px;
          border-radius: 24px;
        `;
        }
      }
    }}
  }
`;

export const StyledCourseLevel = styled.div`
  display: flex;
`;

export const StyledRedText = styled.div`
  color: ${MAIN_COLOR};
  font-family: 'NexonBo';
`;

export const StyledGradeText = styled.div`
  font-family: 'NexonBo';
`;
