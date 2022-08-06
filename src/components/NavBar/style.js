import styled from 'styled-components';

import { MAIN_COLOR, StyledSidePadding } from '@utility';

export const NavBarContainer = styled(StyledSidePadding)`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: white;
  border-top: 5px solid rgb(194, 32, 31);
  @media (max-width: 1224px) {
    height: 65px;
  }
`;

export const NavBarLogoConatiner = styled.div`
  margin-top: -4px;
  margin-right: 5px;
`;

export const NavBarTextContainer = styled.div`
  display: flex;
`;

export const NavBarText = styled.div`
  cursor: pointer;
  color: ${props =>
    props.hoverState && props.hoverState === props.text ? MAIN_COLOR : 'black'};
  font-size: 15px;
  font-weight: 700;
  padding: 20px;
  padding-top: 25px;
  @media (max-width: 1224px) {
    font-size: 12px;
    padding: 8px;
    padding-top: 25px;
  }
`;
