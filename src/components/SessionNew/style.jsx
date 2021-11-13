import { Button, InputNumber } from "antd";
import TextArea from "antd/lib/input/TextArea";
import styled from "styled-components";

export const SessionNewBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const StyledTopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15%;
`;
export const StyledBottomContainer = styled.div`
  display: grid;
  margin-left: 10%;
  margin-right: 10%;
  padding: 80px;
  background-color: white;
  border-radius: 25px;
  grid-gap: 50px;
`;

export const StyledBlackButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 25px;
  border: 0px;
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
`;

export const StyledTextArea = styled(TextArea)`
  background-color: rgb(245, 245, 245);
  border-radius: 15px;
  border: none;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  padding-left: 30px;
  padding-top: 14px;
  padding-bottom: 14px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const StyledInputNumber = styled(InputNumber)`
  background-color: rgb(245, 245, 245);
  border-radius: 15px;
  border: none;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  width: 300px;
  padding-left: 30px;
  padding-top: 14px;
  padding-bottom: 14px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const StyledText = styled.p`
  font-size: 15px;
  font-family: "NexonBo";
  margin: 30px;
  margin-top: 0px;
`;

export const StyledInputBox = styled.p`
  display: grid;
  grid-template-columns: 130px auto;
  align-items: center;
  margin-bottom: 30px;
`;
