import { Select } from 'antd';
import styled from 'styled-components';

import { BASE_COLOR } from '@utility/COLORS';
import { StyledSideMargin, StyledSidePadding } from '@utility/COMMON_STYLE';

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

export const StyledSelect = styled(Select)`
  .ant-select-selector {
    border-radius: 20px !important;
    height: 61px !important;
  }
  .ant-select-selection-item {
    padding-left: 35px !important;
    padding-top: 15px !important;
  }
  border-radius: 20px;
  width: ${props => `${props.width}px` || '150px'};
`;

export const StyledTagSelect = styled(Select)`
  .ant-select-selector {
    border-radius: 20px !important;
    height: 61px !important;
    background-color: ${BASE_COLOR} !important;
    box-shadow: inset 0px 3px 1.5px lightgrey !important;
  }
  .ant-select-selection-item {
    margin-left: 10px;
    border-radius: 10px !important;
    background-color: white !important;
  }
  .ant-select-selection-item-content {
    padding: 5px;
  }
  border-radius: 20px;
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

export const StyledLaguageImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: contain;
`;
