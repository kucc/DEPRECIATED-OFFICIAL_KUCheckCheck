import styled from 'styled-components';

export const StyledSelectContainer = styled.div`
  display: grid;
  margin-top: 70px;
  grid-template-columns: auto 150px;
  @media (max-width: 1224px) {
    grid-template-columns: auto 80px;
  }
`;

export const StyledSelect = styled.div`
  display: grid;
  grid-template-columns: 120px 1px 120px 1px 120px;
  font-weight: 700;
  @media (max-width: 1224px) {
    grid-template-columns: 85px 1px 70px 1px 75px;
  }
`;

export const StyledBottomBackground = styled.div`
  background-color: white;
  margin-top: 25px;
  padding: 50px 40px;
  @media (max-width: 1224px) {
    padding: 20px 15px;
  }
`;

export const StyledCourseHeaderTop = styled.div`
  display: grid;
  grid-template-columns: 150px 1px auto 250px;
  align-items: center;
  @media (max-width: 1224px) {
    grid-template-columns: 60px 1px auto 100px;
  }
`;

export const StyledCourseHeaderImg = styled.img`
  width: 100px;
  background-color: 'white' !important;
  @media (max-width: 1224px) {
    width: 55px;
  }
`;

export const StyledCourseHeaderTitle = styled.div`
  font-family: 'NexonBo';
  margin-left: 30px;
  font-size: 50px;
  @media (max-width: 1224px) {
    margin-left: 5px;
    font-size: 17px;
  }
`;
