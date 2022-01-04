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
  margin-left: 2.7%;
  margin-right: 2.7%;
  font-size: 15px;
`;
export const StyledWeekBox = styled.div`
  display: flex;
  padding-left: calc(14.24% + 190px);
  padding-right: calc(14.24%);
  width: 100%;
  justify-content: center;
  height: 50px;
  margin-top: 10px;
`;

export const StyledBackButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  display: grid;
  place-items: center;
`;

export const StyledEditButton = styled.div`
  width: 120px;
`;
