import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MAIN_COLOR, TEXT_COLOR } from '@utility/COLORS';

export const StyledHeaderContainer = styled.div`
    width: 280px;
    height: 100%;
    position: fixed;
    text-align: center;
    background-color: white;
    padding: 62px 36px;
    margin-top: 8px;
`;

export const StyledLinkButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 54px;
    font-size: 20px;
    color: ${TEXT_COLOR};
    background-color: white;
    border: none;
    border-radius: 35px;
    margin-bottom: 16px;
    &.active {
        color: white;
        background-color: ${MAIN_COLOR};
    }
    svg {
        margin-right: 18px;
    }
`;