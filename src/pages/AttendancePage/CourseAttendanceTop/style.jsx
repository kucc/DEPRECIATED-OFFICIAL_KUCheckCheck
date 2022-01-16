import { Button } from 'antd';
import styled from 'styled-components';

import { StyledSideMargin } from '../../../utility/COMMON_STYLE';

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
`;

export const StyledTopDesc = styled.div`
  font-size: 20px;
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
`;

export const StyledWeekBox = styled.div`
  display: flex;
  padding-left: calc(14.24% + 190px);
  padding-right: calc(14.24%);
  width: 100%;
  justify-content: center;
  height: 50px;
  margin-top: 10px;
`;

export const StyledBackButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  display: grid;
  place-items: center;
  margin-left: -5px;
`;

export const StyledEditButton = styled.div`
  width: 120px;
`;
