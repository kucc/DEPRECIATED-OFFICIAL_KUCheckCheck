import styled from 'styled-components';
import { MAIN_COLOR, TEXT_COLOR } from '@utility/COLORS';

export const DescriptionForm = styled.div`
  text-align: center;
  place-items: center;
  margin-top: ${(props) => (props.isLogin === true ? '110px' : '74px')};
  margin-bottom: 82px;
  @media (max-height: 900px) {
    margin: 10% 0;    
  }
  /* margin-top: ${(props) => (props.isLogin === true ? '110px' : '20px')};
  margin-bottom: 82px; */
`;

export const StyledDescriptionTopText = styled.div`
  font-family: "tmoneyBo";
  font-size: 54px;
  line-height: 58px;
  color: ${(props) => (props.color === 'red' ? MAIN_COLOR : TEXT_COLOR)};
  margin-top: ${(props) => (props.color === 'red' ? '4px' : 0)};
  @media (max-width: 1224px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

export const StyledDescriptionBottomText = styled.div`
  font-size: 20px;
  line-height: 28px;
  color: ${TEXT_COLOR};
  margin: 20px 0 84px 0;
  @media (max-width: 1224px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-height: 900px) {
    font-size: 16px;
    line-height: 20px;
    margin: 20px 0 10% 0;
  }
  
`;