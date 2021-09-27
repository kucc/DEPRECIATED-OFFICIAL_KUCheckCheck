import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;
`;
export const SearchBar = styled.input`
  min-width: 28em;
  height: 3em;
  border-radius: 29px;
  background-color: #f5f5f5;
  border: none;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
    rgb(0 0 0 / 30%) 0px 8px 16px -8px;
`;
export const SearchBtn = styled.div`
  margin-left: 4px;
  justify-content: center;
  height: 3em;
  display: flex;
  align-items: center;
  background: #c32020;
  width: 5em;
  border-radius: 32px;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
    rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  cursor: pointer;
  & > svg {
    font-size: 1.8em;
    color: white;
    font-weight: 900;
  }
`;
export const MainTopWrapper = styled.div`
  min-height: 15em;
  padding: 4em 6em;
  border-bottom-right-radius: 67px;
  border-bottom-left-radius: 67px;
  box-shadow: 0 11px 10px 2px lightgrey;
`;
export const MainTitle = styled.div`
  & > p {
    font-size: 3.4em;
    font-weight: 700;
  }
`;
export const MainExplain = styled.div`
  margin-top: 2px;
  & > p {
    font-size: 18px;
    letter-spacing: 1.2px;
  }
`;

export const SessionContainer = styled.div``;
export const SessionImg = styled.div``;
export const SessionExplainWrapper = styled.div``;
export const SessionText = styled.div``;
export const SessionTitle = styled.div``;
export const SessionExplain = styled.div``;
export const SessionFavorite = styled.div``;

export const MainBottomWrapper = styled.div``;
export const MainBottomBtnCont = styled.div``;
export const MainSessDuration = styled.div``;
export const MainSessItem = styled.div``;
export const MainSessTab = styled.div``;
export const MainSessRig = styled.div``;
export const SessionLevel = styled.div``;
