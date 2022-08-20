import styled from 'styled-components';
import { RED } from '@utility/COLORS';
import { Link } from 'react-router-dom';

export const StyledTopHeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  border-top: 8px solid ${RED};
  background-color: white;
  box-shadow: 0px 0px 10px #EBEBEB;
  z-index: 2;
`;

export const StyledTopHeader = styled.div`
  display: flex;
  width: 1280px;
  height: 84px;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1279px) {
    width: 100%;
  }
`;

export const StyledLeftContainer = styled.div`
  margin-left: auto;
`

export const StyledLink = styled(Link)`
  font-family: "tmoneyBo";
  font-size: 22px;
`