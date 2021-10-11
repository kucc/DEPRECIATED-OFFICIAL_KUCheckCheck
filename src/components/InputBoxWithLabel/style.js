import styled from "styled-components";

export const Wrapper = styled.div``;

export const StyledLabel = styled.label`
  margin-left: 20px;
  font-size: 15px;
`;

export const StyledInput = styled.input`
  padding-left: 20px;
  height: 3em;
  width: 100%;
  border-radius: 29px;
  background-color: #f5f5f5;
  border: none;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  outline: none;

  &::placeholder {
    color: rgb(204, 204, 204);
    font-size: 12px;
  }
`;
