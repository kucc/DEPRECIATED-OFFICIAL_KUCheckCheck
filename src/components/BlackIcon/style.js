import styled from 'styled-components';

export const StyledIconContainer = styled.div`
  background-color: black;
  width: 27px;
  height: 27px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 14px;
  @media (max-width: 1224px) {
    width: 22px;
    height: 22px;
    font-size: 12px;
  }
`;
