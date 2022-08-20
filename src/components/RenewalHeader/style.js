import styled from 'styled-components';
import { RED, BLACK } from '@utility/COLORS';

export const StyledHeaderContainer = styled.div`
    width: 124px;
    height: 100%;
    position: fixed;
    text-align: center;
    padding-right: 28px;
    z-index: 1;
    display: flex;
    flex-direction: column;
`;

export const StyledLinkButton = styled.span`
    margin-bottom: 33px;
    text-align: left;
    cursor: pointer;
`;

export const StyleActive = styled.span`
    color: ${BLACK};
    padding: 2px 5px;    
    &.active {
        color: ${RED};
        border-bottom: 2px solid ${RED};
    }

    svg {
        width: 20px;
       margin-right: 12px;
    }
`;