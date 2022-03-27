import styled from 'styled-components';

import { BASE_COLOR } from '@utility';

export const Wrapper = styled.div``;

export const StyledLabel = styled.label`
  margin-left: 20px;
  font-size: 15px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;

export const StyledInput = styled.input`
  padding-left: 20px;
  height: 3em;
  width: 100%;
  border-radius: 29px;
  background-color: ${BASE_COLOR} !important;
  border: none;
  outline: none;
  &::placeholder {
    color: rgb(204, 204, 204);
    font-size: 12px;
    @media (max-width: 1224px) {
      font-size: 11px;
    }
  }
`;
