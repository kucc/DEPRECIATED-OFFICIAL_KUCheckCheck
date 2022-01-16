<<<<<<< HEAD
import styled from "styled-components";
import { StyledSideMargin } from "../../../utility/COMMON_STYLE";
=======
import styled from 'styled-components';
>>>>>>> 07c6c05844124c4efcc890d219209c5c04ed114c

export const StyledMainBottomWrapper = styled(StyledSideMargin)`
  margin-top: 100px;
  padding-bottom: 30px;
`;

export const StyledMainBottomBtnCont = styled.div`
  display: grid;
  grid-template-columns: 11.25% auto 10.52%;
  min-width: 1100px;
`;

export const StyledMainSessDuration = styled.div``;

export const StyledMainSessTab = styled.div`
  margin-left: 50px;
  display: grid;
  grid-template-columns: 100px 1px 100px 1px 100px 1px 100px;
`;

export const StyledMainSessRig = styled.div`
  a.ant-btn {
    padding-top: 5px !important;
  }
`;

export const StyledMainSessItemOffClick = styled.div`
<<<<<<< HEAD
=======
  background-color: ${props =>
    props.courseSelect === props.selectedType && 'white'};
  box-shadow: ${props =>
    props.courseSelect === props.selectedType &&
    'inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px'};
>>>>>>> 07c6c05844124c4efcc890d219209c5c04ed114c
  border-radius: 24px;
  width: 80%;
  text-align: center;
  margin: 0 10%;
  padding-top: 10px;
  cursor: pointer;
`;

export const StyledMainVerticalLine = styled.div`
  border-right: 1px solid #b6b6b677;
  height: 40px;
  margin-left: 5%;
`;
