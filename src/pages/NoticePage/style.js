import { Collapse } from 'antd';
import styled from 'styled-components';

import { StyledSideMargin } from '@utility';

export const StyledRulesBox = styled(StyledSideMargin)`
  display: grid;
  grid-template-rows: 100px auto;
`;

export const StyledRulesTitle = styled.div`
  font-size: 26px;
  margin-left: 5%;
  font-family: 'NexonBo';
  margin-top: 50px;
`;

export const StyledRulesCollapse = styled(Collapse)`
  border: none;
  &.ant-collapse {
    background-color: rgb(245, 245, 245);
  }
  .ant-collapse-item {
    border-radius: 24px;
    background-color: black;
    margin-bottom: 50px;
    box-shadow: 0 11px 10px 2px lightgrey;
  }

  .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
    display: inline-block;
    padding-right: 30 px;
    font-size: 30px;
    position: absolute;
    top: 50%;
    right: 40px;
    @media (max-width: 1224px) {
      right: 10px;
    }
  }
  .ant-collapse-item:last-child,
  .ant-collapse-item:last-child > .ant-collapse-header {
    border-radius: 24px;
  }

  .ant-collapse-item:last-child > .ant-collapse-content {
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }
`;

export const StyledRulesPanel = styled(Collapse.Panel)`
  .ant-collapse-header {
    color: white !important;
    height: 80px;
    display: flex;
    align-items: center !important;
    margin-left: 100px;
    font-size: 21px;
    @media (max-width: 1224px) {
      margin-left: 30px;
      height: 100%;
      font-size: 18px;
    }
  }

  .ant-collapse-content {
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    & > .ant-collapse-content-box {
      white-space: pre-line;
      font-size: 16px;
      @media (max-width: 1224px) {
        font-size: 12px;
      }
    }
  }
`;

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;
