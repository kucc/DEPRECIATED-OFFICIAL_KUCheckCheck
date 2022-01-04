import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-top: 100px;
  padding-left: 19%;
  padding-right: 19%;
  background-color: rgb(245, 245, 245);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBox = styled.div`
  background-color: white;
  border-radius: 50%;
  text-align: center;
  font-family: "NexonRe";
  font-size: 10px;
  width: 110px;
  box-shadow: rgb(50 50 93 / 8%) 0px 13px 27px -5px,
    rgb(0 0 0 / 20%) 0px 8px 16px -8px;
`;

export const StyledEmogi = styled.div`
  font-size: 40px;
  margin-bottom: -5px;
`;

export const StyledAttendanceBox = styled.div`
  background-color: white;
  box-shadow: rgb(50 50 93 / 8%) 0px 13px 27px -5px,
    rgb(0 0 0 / 20%) 0px 8px 16px -8px;
  margin-left: 30px;
  padding: 20px;
  width: 100%;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAttendance = styled.div`
  color: black;
  margin: 3%;
`;

export const StyledAbsence = styled.div`
  color: red;
  margin: 3%;
`;

export const StyledLate = styled.div`
  color: red;
  margin: 3%;
`;
