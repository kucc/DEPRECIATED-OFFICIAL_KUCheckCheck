import { InputNumber } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const StyledTopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15%;
  margin-top: 20px;
`;
export const StyledBottomContainer = styled.div`
  display: grid;
  margin-left: 10%;
  margin-right: 10%;
  padding: 80px;
  background-color: white;
  grid-gap: 50px;
`;

export const StyledBlackButton = styled.button`
  background-color: black;
  color: white;
  border: 0px;
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
`;

export const StyledText = styled.p`
  font-size: 15px;
  font-family: 'NexonBo';
  margin: 30px;
  margin-top: 0px;
`;

export const StyledInputBox = styled.p`
  display: grid;
  grid-template-columns: 130px auto;
  align-items: center;
  margin-bottom: 30px;
`;
