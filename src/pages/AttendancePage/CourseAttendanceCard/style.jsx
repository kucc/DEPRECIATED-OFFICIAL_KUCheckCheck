import styled from "styled-components";
import { StyledSidePadding } from "../../../utility/COMMON_STYLE";

export const StyledContainer = styled(StyledSidePadding)`
  background-color: rgb(245, 245, 245);
  display: grid;
  grid-template-columns: 130px auto;
  padding-bottom: 40px;
  align-items: center;
`;

export const StyledBox = styled.div`
  background-color: white;
  border-radius: 50%;
  text-align: center;
  font-family: "NexonRe";
  font-size: 10px;
  width: 130px;
  height: 130px;
  display: grid;
  place-items: center;
  box-shadow: rgba(0, 0, 0, 0.187) 0px 4px 5px 1px;
  cursor: pointer;
`;

export const StyledEmoji = styled.div`
  font-size: 70px;
  margin-bottom: -15px;
`;

export const StyledAttendanceBox = styled.div`
  background-color: white;
  box-shadow: inset rgba(0, 0, 0, 0.187) 0px 3px 1.5px;
  margin-left: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export const StyledAttend = styled.div`
  font-family: "NexonBo";
  color: #000000;
  margin: 3%;
`;

export const StyledAbsent = styled.div`
  font-family: "NexonBo";
  color: red;
  margin: 3%;
`;

export const StyledLate = styled.div`
  font-family: "NexonBo";
  color: #e67d4f;
  margin: 3%;
`;
