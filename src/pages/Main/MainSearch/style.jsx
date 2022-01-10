import { Button } from "antd";
import CheckableTag from "antd/lib/tag/CheckableTag";
import styled from "styled-components";
import { baseColor, mainColor } from "../../../style/Colors";

export const StyledTag = styled(CheckableTag)`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 30px;
  margin-left: 10px;
  margin-top: 10px;
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

export const StyledSearchContainer = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;
`;

export const StyledSearchBar = styled.input`
  min-width: 28em;
  height: 3.5em;
  border-radius: 29px;
  background-color: ${baseColor};
  border: none;
  z-index: 0;
  box-shadow: rgb(50 50 93 / 8%) 0px 13px 27px -5px,
    rgb(0 0 0 / 20%) 0px 8px 16px -8px;
  padding-left: 50px;
  &::placeholder {
    color: rgb(204, 204, 204);
  }
  &:focus {
    outline: none;
  }
`;

export const StyledSearchBtn = styled.div`
  margin-right: -30px;
  z-index: 1;
  justify-content: center;
  height: 3.5em;
  display: flex;
  align-items: center;
  background: ${mainColor};
  width: 7em;
  border-radius: 32px;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
    rgb(0 0 0 / 20%) 0px 8px 16px -8px;
  cursor: pointer;
  & > svg {
    font-size: 2em;
    color: white;
    font-weight: 900;
  }
`;

export const StyledQuickSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  margin-top: 20px;
  margin-left: -10px;
  align-items: start;
`;

export const StyledQuickSearchText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: "NexonBo";
  margin-top: 10px;
`;
