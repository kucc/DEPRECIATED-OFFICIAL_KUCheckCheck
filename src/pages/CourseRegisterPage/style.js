import styled from 'styled-components';

import { StyledSideMargin, StyledSidePadding } from '@utility';

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const StyledCourseRegisterText = styled(StyledSidePadding)`
  margin-left: 5%;
  font-family: 'NexonBo';
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 26px;
`;

export const StyledTopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15%;
  margin-top: 20px;
`;

export const StyledBottomContainer = styled(StyledSideMargin)`
  display: grid;
  padding: 80px;
  background-color: white;
  grid-gap: 50px;
`;

export const StyledBlackButton = styled.button`
  background-color: black;
  color: white;
  border: 0px;
  width: ${props => props.width || '150px'};
  height: 50px;
  margin-bottom: 10px;
`;

export const StyledText = styled.div`
  font-size: 15px;
  font-family: 'NexonBo';
  margin: 30px;
  margin-top: 0px;
`;

export const StyledTooltipText = styled.div`
  display: flex;
  font-family: 'NexonBo';
  margin-right: -20px;
`;

export const StyledInputBox = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledRegisterRequireTop = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const StyledRegisterRequireTopLeft = styled.div`
  border-right: 1px solid #b6b6b677;
  margin: 10px 0px;
  display: grid;
  grid-template-columns: 130px 100px 1px 100px 1px 100px;
  align-items: center;
`;

export const StyledRegisterRequireTopRight = styled.div`
  display: grid;
  grid-template-columns: 130px auto auto;
  align-items: center;
`;
