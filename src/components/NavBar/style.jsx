import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding-left: 14.24%;
  padding-right: 14.24%;
`;

export const NavBarLogoContainer = styled.div`
  display: grid;
  grid-template-columns: 140px 100px 100px;
  align-items: center;
  margin-top: -10px;
`;
export const NavBarTextContainer = styled.div`
  margin-top: -11.5px;
  color: black;
  font-size: 15px;
  font-family: "NexonBo";
  font-weight: 700;
`;
export const NavBarAuth = styled.div`
  min-width: 172px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "NexonBo";
  & > a {
    text-decoration: none;
    color: black;
  }
`;
export const NavBarAuthOn = styled.div`
  min-width: 172px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-weight: 700;
  font-size: 15px;
  & > p {
    margin-bottom: 0px;
    font-family: "NexonBo";
  }
  & > div {
    /* font-size: 12px; */
    font-family: "NexonBo";
  }
`;
export const NavBarAuthCont = styled.div`
  display: flex;
  align-items: center;
`;
export const NavBarMenuContainer = styled.div`
  display: flex;
`;
export const myPageButton = styled.div`
  width: 60px;
  height: 40px;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 245, 245);
    border-radius: 24px;
    box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
    -webkit-transition: width 0.5s, border-radius 0.5s, box-shadow 0.5s,
      background-color 0.5s;
    transition: width 0.5s, border-radius 0.5s, box-shadow 0.5s,
      background-color 0.5s;
  }
`;
export const logOutButton = styled.div`
  width: 80px;
  height: 40px;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 245, 245);
    border-radius: 24px;
    box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
    -webkit-transition: width 0.5s, border-radius 0.3s, box-shadow 0.5s,
      background-color 0.5s;
    transition: width 0.5s, border-radius 0.3s, box-shadow 0.5s,
      background-color 0.5s;
  }
`;
