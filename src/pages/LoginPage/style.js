
import styled from 'styled-components';
import { BASE_COLOR } from '@utility/COLORS';

export const StyledCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${BASE_COLOR};
  position: relative;
`;

export const StyledAuthContainer = styled.div`
  width: 660px;
  height: ${(props) => props.isLogin ? '100vh' : '100%'};
  padding: 0 104px 100px 104px;
  background-color: white;
  @media (max-width: 1224px) {
    width: 100%;
    padding: 10%;
  }
  @media (max-height: 900px) {
    padding: 10%;
  }
`;

export const StyledAuthMainImg = styled.img`
  width: 104px;
  height: 104px;
  content: url('/img/logo/type-1-3.svg');
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;