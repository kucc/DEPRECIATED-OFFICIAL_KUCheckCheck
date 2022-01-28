import styled from 'styled-components';

import { MAIN_COLOR } from '@utility/COLORS';

export const NavBarBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 14.24%;
  padding-right: 14.24%;
  margin-top: -12px;
  height: 90px;
  background-color: white;
  @media (max-width: 1224px) {
    padding-left: 5.64%;
    padding-right: 5.64%;
  }
`;

export const NavBarLogoContainer = styled.div`
  display: grid;
  grid-template-columns: 140px 100px 100px;
  align-items: center;
  z-index: 0;
  place-items: center;
  @media (max-width: 1224px) {
    grid-template-columns: 140px;
  }
`;
export const NavBarTextContainer = styled.div`
  cursor: pointer;
  color: ${props =>
    props.hoverState && props.hoverState !== props.text ? 'gray' : 'black'};
  font-size: 15px;
  font-family: 'NexonBo';
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;

export const NavBarAuth = styled.div`
  display: grid;
  grid-template-columns: 90px 90px;
  place-items: center;
  @media (max-width: 1224px) {
    grid-template-columns: 60px 60px;
    font-size: 12px;
  }
`;

export const NavBarAuthOn = styled.div`
  min-width: 172px;
  display: grid;
  place-items: center;
  grid-template-columns: auto 90px 90px;
  font-size: 15px;
  @media (max-width: 1224px) {
    grid-template-columns: 60px 60px;
    min-width: 100px;
  }
`;

export const NavBarAuthCont = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBarMenuContainer = styled.div`
  display: flex;
`;

export const NavBarMobileLoginText = styled.div`
  display: grid;
  place-items: center;
  font-size: 12px;
  grid-template-columns: 70px;
  & > a > div {
    color: ${MAIN_COLOR};
  }
`;
