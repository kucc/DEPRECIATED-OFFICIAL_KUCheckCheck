import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
`;
export const NavBarLogoContainer = styled.div`
  width: 183px;
  display: flex;
  align-items: center;
  margin-left: 4em;
  justify-content: space-evenly;
  & > a:nth-child(2) {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
`;
export const NavBarAuth = styled.div`
  min-width: 172px;
  margin-right: 4em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "NexonBo";
  & > a {
    text-decoration: none;
    color: black;
    font-weight: 500;
  }
`;
export const NavBarAuthOn = styled.div`
  min-width: 172px;
  margin-right: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-weight: 700;
  font-size: 15px;
  & > p {
    margin-bottom: 0px;
  }
  & > div {
    font-size: 12px;
  }
`;
export const NavBarAuthCont = styled.div`
  display: flex;
  align-items: center;
`;
export const NavBarMenuContainer = styled.div`
  display: flex;
`;
