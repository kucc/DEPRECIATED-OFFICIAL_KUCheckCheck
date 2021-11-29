import { Button } from "antd";
import CheckableTag from "antd/lib/tag/CheckableTag";
import styled from "styled-components";

export const StyledTag = styled(CheckableTag)`
  height: 30px;
  margin-left: 10px;
  margin-top: 12px;
  background-color: rgb(233, 233, 233);
  border-radius: 10px;
  border: none;
  padding-top: 3px;
  font-size: 14px;
  font-family: "NexonBo";
  &.ant-tag-checkable-checked {
    background-color: #2997ff !important;
    font-family: "NexonRe";
    border: 2px solid #1e92ff50;
  }
`;
