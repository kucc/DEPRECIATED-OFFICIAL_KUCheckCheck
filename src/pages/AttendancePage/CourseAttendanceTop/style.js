import { Button } from 'antd';
import { AiOutlineLeft } from 'react-icons/ai';
import styled from 'styled-components';

export const StyledTopBox = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: 50px auto 120px;
  @media (max-width: 1224px) {
    grid-template-columns: 30px auto 80px;
  }
`;

export const StyledTopTitle = styled.div`
  font-size: 24px;
  font-family: 'NexonBo';
  @media (max-width: 1224px) {
    font-size: 14px;
  }
`;

export const StyledTopDesc = styled.div`
  font-size: 20px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;

export const StyledLeftBox = styled.div`
  margin-left: 5%;
`;

export const StyledWeekTextBox = styled.div`
  width: 80px;
  font-size: 15px;
  text-align: center;
`;

export const StyledWeekBox = styled.div`
  display: flex;
  padding: 10px 0px;
  padding-left: 200px;
  width: 100%;
  justify-content: center;
`;

export const StyledBackButton = styled(Button)`
  width: 50px;
  height: 50px;
  display: grid;
  align-items: center;
  justify-content: center;
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
