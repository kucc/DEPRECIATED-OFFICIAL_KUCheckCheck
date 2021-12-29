import { Button } from "antd";
import styled from "styled-components";

export const StyledTopBox = styled.div`
  padding-left: 14.24%;
  padding-right: 14.24%;
  display: flex;
`;

export const StyledLeftBox = styled.div`
  width: 100%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
`;

export const StyledTextBox = styled.div`
  margin: 2.7%;
  font-size: 14px;
`;
export const StyledWeekBox = styled.div`
  display: flex;
  padding-left: calc(19% + 160px);
  padding-right: calc(19% + 20px);
  width: 100%;
  justify-content: center;
  height: 50px;
`;

export const StyledBackButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  display: grid;
  place-items: center;
`;

export const StyledEditButton = styled(Button)`
  width: 120px;
  height: 40px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  display: grid;
  place-items: center;
`;
