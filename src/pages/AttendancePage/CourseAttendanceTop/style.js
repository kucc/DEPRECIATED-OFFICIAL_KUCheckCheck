import { Button } from 'antd';
import { AiOutlineLeft } from 'react-icons/ai';
import styled from 'styled-components';

import { StyledSideMargin } from '@utility/COMMON_STYLE';

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const StyledTopContainer = styled.div`
  margin-top: 50px;
`;

export const StyledTopBox = styled(StyledSideMargin)`
  display: flex;
`;

export const StyledTopTitle = styled.div`
  font-size: 24px;
  font-family: 'NexonBo';
  @media (max-width: 1224px) {
    font-size: 16px;
  }
`;

export const StyledTopDesc = styled.div`
  font-size: 20px;
  @media (max-width: 1224px) {
    font-size: 15px;
  }
`;

export const StyledLeftBox = styled.div`
  width: 100%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
`;

export const StyledWeekTextBox = styled.div`
  margin-left: 2.7%;
  margin-right: 2.7%;
  font-size: 15px;
  @media (max-width: 1224px) {
    font-size: 10px;
    margin: 0.5%;
  }
`;

export const StyledWeekBox = styled.div`
  display: flex;
  padding: 10px 0px;
  padding-left: calc(14.24% + 190px);
  padding-right: calc(14.24%);
  width: 100%;
  justify-content: center;
  @media (max-width: 1224px) {
    padding-left: calc(5% + 100px);
    padding-right: calc(5%);
  }
`;

export const StyledBackButton = styled(Button)`
  width: 50px;
  height: 50px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin-left: -5px;
  @media (max-width: 1224px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledBackButtonIcon = styled(AiOutlineLeft)`
  stroke-width: 50;
  font-size: 20px;
  @media (max-width: 1224px) {
    stroke-width: 40;
    font-size: 15px;
  }
`;

export const StyledEditButton = styled.div`
  width: 120px;
  @media (max-width: 1224px) {
    width: 80px;
  }
`;
