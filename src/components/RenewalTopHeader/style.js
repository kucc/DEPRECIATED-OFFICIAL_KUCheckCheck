import styled from 'styled-components';
import { MAIN_COLOR } from '@utility/COLORS';
import { Link } from 'react-router-dom';

export const StyledTopHeaderContainer = styled.div`
  width: 1920px;
  position: fixed;
  border-top: 8px solid ${MAIN_COLOR};
  background-color: white;
  padding-left: 285px;
  @media (max-width: 1920px) {
    width: 100%;
  }
`;

export const StyledTopHeader = styled.div`
    display: flex;
    padding: 42px 96px 15px 96px;
`;

export const StyledLeftContainer = styled.div`
    margin-left: auto;
`

export const StyledLink = styled(Link)`
    font-family: "tmoneyBo";
    font-size: 22px;
`