import styled from 'styled-components';
import { RED, BLACK } from '@utility/COLORS';

export const StyledHeaderContainer = styled.div`
    width: 130px;
    height: 100%;
    position: fixed;
    text-align: center;
    padding-right: 21px;
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
    font-size: 18px;
    padding: 2px 5px;    
    &.active {
        color: ${RED};
        border-bottom: 3px solid ${RED};
    }

    svg {
        width: 20px;
       margin-right: 12px;
    }
`;