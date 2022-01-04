import styled from "styled-components";

export const NavBarBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const NavBarShadowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 14.24%;
  padding-right: 14.24%;
  margin-top: -12px;
  height: 90px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: 0 11px 10px 2px lightgrey;
  background-color: white;
`;

export const NavBarNonShadowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 14.24%;
  padding-right: 14.24%;
  margin-top: -12px;
  height: 90px;
  background-color: white;
`;

export const NavBarLogoContainer = styled.div`
  display: grid;
  grid-template-columns: 140px 100px 100px;
  align-items: center;
  z-index: 0;
`;
export const NavBarTextContainer = styled.div`
  cursor: pointer;
  color: ${(props) =>
    props.hoverState && props.hoverState !== props.text ? "gray" : "black"};
  font-size: 15px;
  font-family: "NexonBo";
  /* &:hover {
    background-color: rgb(245, 245, 245);
    border-radius: 24px;
    box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
    -webkit-transition: width 0.5s, border-radius 0.5s, box-shadow 0.5s,
      background-color 0.5s;
    transition: width 0.5s, border-radius 0.5s, box-shadow 0.5s,
      background-color 0.5s;
  } */
`;
export const NavBarAuth = styled.div`
  display: grid;
  grid-template-columns: 90px 90px;
  place-items: center;
`;
export const NavBarAuthOn = styled.div`
  min-width: 172px;
  display: grid;
  place-items: center;
  grid-template-columns: auto 90px 90px;
  font-weight: 700;
  font-size: 15px;
  & > p {
    margin-bottom: 0px;
    font-family: "NexonBo";
  }
  & > div {
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
