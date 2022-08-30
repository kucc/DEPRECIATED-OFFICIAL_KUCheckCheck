import styled from 'styled-components';
import { RED, BLACK } from '@utility/COLORS';
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

export const StyledLoginLink = styled(Link)`
  font-family: "tmoneyBo";
  font-size: 18px;
`

export const StyledUserContainer = styled.span`
  font-size: 18px;
  font-family: 'tmoneyRe';
  color: ${BLACK};
  margin-right: 13px;
`;

export const StyledUserName = styled.span`
  font-family: 'tmoneyBo';
  margin-right: 4px;
`;

export const StyledMenuButton = styled.div`
  cursor: pointer;
`;

export const StyledDropContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;
