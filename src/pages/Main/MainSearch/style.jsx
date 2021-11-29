import { Button } from "antd";
import CheckableTag from "antd/lib/tag/CheckableTag";
import styled from "styled-components";

export const StyledTag = styled(CheckableTag)`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 30px;
  margin-left: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: none;
  padding-top: 3px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
  &.ant-tag-checkable-checked {
    background-color: #212121 !important;
    color: white;
  }
`;

export const StyledIconContainer = styled.div`
  background-color: black;
  width: 27px;
  height: 27px;
  display: grid;
  place-items: center;
  border-radius: 50%;
`;
