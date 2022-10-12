import styled from 'styled-components';

import { BLACK, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledForm = styled.form`
  padding-inline: 20px;
  padding-bottom: 40px;
`;
export const StyledHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-inline: 20px;
  margin-bottom: 20px;
`;
export const StyledTitle = styled.span`
  font-size: 26px;
  font-family: 'tmoneyBo';
  color: ${BLACK};
  @media (max-width: 1279px) {
    font-size: 16px;
  }
`;

export const StyledButton = styled.button`
  width: 166px;
  height: 50px;
  font-size: 18px;
  margin-left: auto;
  border-radius: 25px;
  border: none;
  background-color: ${RED};
  color: white;
  cursor: pointer;
  @media (max-width: 1279px) {
    font-size: 10px;
    width: 80px;
    height: 26px;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  border: 2px solid ${LINE_GRAY};
  border-radius: 10px;
  opacity: 1;

  & + & {
    margin-top: 48px;
    @media (max-width: 1279px) {
      margin-top: 20px;
    }
  }
`;
export const StyledContainerHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 50px 5px 50px;
  gap: 20px;
  border-bottom: 1.5px solid ${LINE_GRAY};
`;

export const StyledContainerTitle = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  padding: 15px 10px;
  border-bottom: 3px solid black;
  .bottom-line {
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export const StyledContainerSubTitle = styled.span`
  line-height: 60px;
  text-align: center;
  .warning {
    color: ${RED};
  }
`;

export const StyledContainerBody = styled.div`
  padding: 20px 40px 80px;
  @media (max-width: 1279px) {
    padding-inline: 15px;
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: 16px;
  font-family: 'sdBo';
  color: ${BLACK};
  margin: 0 6px 8px 30px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;
