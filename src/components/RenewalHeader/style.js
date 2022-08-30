import styled, { css } from 'styled-components';
import { RED, BLACK } from '@utility/COLORS';

export const StyledHeaderContainer = styled.div`
    width: 136px;
    height: 100%;
    position: fixed;
    text-align: center;
    padding-right: 21px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1279px) {
        display: none;
    }
`;

export const StyledLinkButton = styled.span`
    margin-bottom: 33px;
    text-align: left;
    cursor: pointer;
`;

export const StyleActive = styled.span`
    color: ${BLACK};
    font-size: 18px;
    padding: 2px 5px;    
    ${props => props.active && css`
        color: ${RED};
        border-bottom: 3px solid ${RED};
    `}
    svg {
        width: 20px;
       margin-right: 12px;
    }
`;