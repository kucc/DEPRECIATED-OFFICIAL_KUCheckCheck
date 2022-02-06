import styled from 'styled-components';

import { BASE_COLOR } from '@utility/COLORS';
import { StyledSidePadding } from '@utility/COMMON_STYLE';

export const StyledContainer = styled(StyledSidePadding)`
  background-color: ${BASE_COLOR};
  display: grid;
  grid-template-columns: 200px auto;
  padding-bottom: 40px;
  align-items: center;
  @media (max-width: 1224px) {
    grid-template-columns: 100px auto;
  }
`;

export const StyledBox = styled.div`
  background-color: white;
  border-radius: 50%;
  text-align: center;
  font-family: 'NexonRe';
  font-size: 10px;
  width: 130px;
  height: 130px;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-color: black;
    color: white;
  }
  @media (max-width: 1224px) {
    width: 80px;
    height: 80px;
  }
`;

export const StyledEmoji = styled.div`
  font-size: 70px;
  margin-bottom: -15px;
  @media (max-width: 1224px) {
    font-size: 40px;
  }
`;

export const StyledAttendanceBox = styled.div`
  background-color: white;
  height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  @media (max-width: 1224px) {
    font-size: 10px;
  }
`;

const StyledTextBase = styled.div`
  font-family: 'NexonBo';
  margin: 3%;
  @media (max-width: 1224px) {
    font-family: 'NexonRe';
    margin: 1%;
  }
`;

export const StyledAttend = styled(StyledTextBase)`
  color: #000000;
`;

export const StyledAbsent = styled(StyledTextBase)`
  color: red;
`;

export const StyledLate = styled(StyledTextBase)`
  color: red;
`;
