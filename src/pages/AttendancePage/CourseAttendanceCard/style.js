import styled from 'styled-components';

import { BASE_COLOR } from '@utility/COLORS';
import { StyledSidePadding } from '@utility/COMMON_STYLE';

export const StyledContainer = styled(StyledSidePadding)`
  background-color: ${BASE_COLOR};

  display: grid;
  grid-template-columns: 130px auto;
  padding-bottom: 40px;
  align-items: center;
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
`;

export const StyledEmoji = styled.div`
  font-size: 70px;
  margin-bottom: -15px;
`;

export const StyledAttendanceBox = styled.div`
  background-color: white;
  margin-left: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export const StyledAttend = styled.div`
  font-family: 'NexonBo';
  color: #000000;
  margin: 3%;
`;

export const StyledAbsent = styled.div`
  font-family: 'NexonBo';
  color: red;
  margin: 3%;
`;

export const StyledLate = styled.div`
  font-family: 'NexonBo';
  color: red;
  margin: 3%;
`;
