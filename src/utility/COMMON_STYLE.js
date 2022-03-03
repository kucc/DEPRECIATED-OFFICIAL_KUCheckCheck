import { InputNumber, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';

import { BASE_COLOR } from './COLORS';

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const StyledSideMargin = styled.div`
  margin-left: 14.21%;
  margin-right: 14.21%;
  @media (max-width: 1224px) {
    margin-left: 5.64%;
    margin-right: 5.64%;
  }
`;

export const StyledSidePadding = styled.div`
  padding-left: 14.21%;
  padding-right: 14.21%;
  @media (max-width: 1224px) {
    padding-left: 5.64%;
    padding-right: 5.64%;
  }
`;

export const StyledVerticalLine = styled.div`
  border-right: 1px solid #b6b6b677;
  height: ${props => (props.length ? `${props.length}px` : '40px')};
  margin-left: 5%;
`;

export const StyledSelectItem = styled.div`
  border-radius: 24px;
  text-align: center;
  margin: 0px 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  @media (max-width: 1224px) {
    margin: 0px 7%;
    font-size: 9px;
    font-family: 'NexonBo';
    padding: 0px 5px;
  }
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
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;

export const StyledInputNumber = styled(InputNumber)`
  background-color: rgb(245, 245, 245);
  border-radius: 15px;
  border: none;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  width: 300px;
  padding-left: 19px;
  padding-top: 14px;
  padding-bottom: 14px;
  outline: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 1224px) {
    width: 100%;
    font-size: 12px;
  }
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
    min-height: 61px !important;
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
  .ant-select-selection-item-remove {
    padding-top: 3px;
  }
  border-radius: 20px;
`;

export const StyledLaguageImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: contain;
`;
