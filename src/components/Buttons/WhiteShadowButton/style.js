import styled from 'styled-components';

export const StyledWhiteShadowButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${props => props.bgColor};
  color: ${props => (props.bgColor === 'white' ? 'black' : 'white')};
  border: none;
  cursor: pointer;
  font-size: 13px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
  transition: all 0.4s ease;
`;
