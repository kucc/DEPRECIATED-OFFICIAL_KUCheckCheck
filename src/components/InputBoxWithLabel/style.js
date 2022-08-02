import styled from 'styled-components';

import { TEXT_COLOR } from '@utility';

export const Wrapper = styled.div`
  margin-top: ${(props) => (props.isLabelTitle ? '38px' : '20px')};
  &:first-child {
    margin: 0;
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: 16px;
  font-family: 'NexonBo';
  color: ${TEXT_COLOR};
  margin: 0 6px 8px 30px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;

export const StyledInput = styled.input`
  color: ${TEXT_COLOR};
  width: 100%;
  height: 60px;
  font-size: 18px;
  padding: 20px 34px;
  background-color: #F5F5F5;
  border-radius: 39px;
  border: 1px solid #DEDEDE;
  outline: none;
  &::placeholder {
    color: #B6B6B6;
  }
  @media (max-width: 1224px) {
    font-size: 14px;
    height: 52px;
    padding: 12px 34px;
    border-radius: 25px;
  }
`;

export const StyledRequiredText = styled.span`
  color: #B6B6B6;
  font-size: 12px;
  font-family: 'NexonBo';
`;