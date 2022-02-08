import styled from 'styled-components';

export const StyledCourseDifficulty = styled.div`
  margin-top: 25px;
  margin-right: 25px;
  padding-top: 25px;
  height: 64px;
  background-color: rgb(245, 245, 245) !important;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  place-content: center;
  gap: 3px;
  @media (max-width: 1224px) {
    margin-top: 0px;
    margin-right: 0px;
    width: 50%;
    height: 80px;
    padding: 5.111px;
    align-items: flex-end;
    font-size: 10px;
  }
`;

export const StyledCourseLevel = styled.div`
  display: flex;
`;

export const StyledRedText = styled.div`
  color: red;
  font-family: 'NexonBo';
`;

export const StyledGradeText = styled.div`
  font-family: 'NexonBo';
`;
