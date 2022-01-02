import styled from "styled-components";

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const SearchContainer = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  min-width: 28em;
  height: 3.5em;
  border-radius: 29px;
  background-color: #f5f5f5;
  border: none;
  z-index: 0;
  box-shadow: rgb(50 50 93 / 8%) 0px 13px 27px -5px,
    rgb(0 0 0 / 20%) 0px 8px 16px -8px;
  padding-left: 50px;
  &::placeholder {
    color: rgb(204, 204, 204);
  }
  &:focus {
    outline: none;
  }
`;
export const SearchBtn = styled.div`
  margin-right: -30px;
  z-index: 1;
  justify-content: center;
  height: 3.5em;
  display: flex;
  align-items: center;
  background: #c32020;
  width: 7em;
  border-radius: 32px;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
    rgb(0 0 0 / 20%) 0px 8px 16px -8px;
  cursor: pointer;
  & > svg {
    font-size: 2em;
    color: white;
    font-weight: 900;
  }
`;

export const MainTopWrapper = styled.div`
  min-height: 18em;
  padding: 5em 21em 2em;
  height: 30em;
  border-bottom-right-radius: 67px;
  border-bottom-left-radius: 67px;
  box-shadow: 0 11px 10px 2px lightgrey;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
`;

export const MainTitle1 = styled.div`
  & > p {
    font-size: 4em;
    font-weight: 700;
    font-family: NexonBo;
    color: #c32020;
  }
`;

export const MainTitle2 = styled.div`
  margin: -90px 0px 15px;
  & > p {
    font-size: 4em;
    font-weight: 700;
    font-family: NexonBo;
  }
`;

export const MainExplain = styled.div`
  margin: -60px 0px 15px;
  & > p {
    font-size: 17px;
    word-spacing: 1.2px;
    font-family: NexonRe;
  }
`;

export const MainBottomWrapper = styled.div`
  margin-top: 100px;
  margin-left: 14.21%;
  margin-right: 14.21%;
  padding-bottom: 30px;
`;

export const MainBottomBtnCont = styled.div`
  display: grid;
  grid-template-columns: 11.25% auto 10.52%;
  min-width: 1100px;
`;

export const MainSessDuration = styled.div``;

export const MainSessItem = styled.div`
  margin-left: 15px;
  display: flex;
  gap: 3px;
`;

export const MainSessTab = styled.div`
  margin-left: 50px;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
`;

export const MainSessRig = styled.div`
  a.ant-btn {
    padding-top: 5px !important;
  }
`;

export const MainSessItemOnClick = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 10px;
  background-color: white;
  border-radius: 24px;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  cursor: pointer;
`;

export const MainSessItemOffClick = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
`;

export const MainVerticalLine = styled.div`
  border-right: 1px solid #b6b6b677;
  height: 40px;
  margin-left: 5%;
`;
