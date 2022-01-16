import { Collapse } from 'antd';
import styled from 'styled-components';

export const StyledRulesBox = styled.div`
  display: grid;
  grid-template-rows: 100px auto;
  margin-left: 14.24%;
  margin-right: 14.24%;
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
    box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
      rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  }

  .ant-collapse > .ant-collapse-item:last-child,
  .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
    background-color: black;
    border-radius: 24px;
  }

  .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
    display: inline-block;
    padding-right: 30 px;
    font-size: 30px;
    position: absolute;
    top: 50%;
    right: 40px;
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
    height: 100px;
    display: flex;
    align-items: center;
    margin-left: 100px;
    font-size: 28px;
    border-radius: 24px;
  }

  .ant-collapse-content {
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }
`;

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;
