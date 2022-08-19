import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MAIN_COLOR, TEXT_COLOR } from '@utility/COLORS';

export const StyledHeaderContainer = styled.div`
    width: 238px;
    height: 100%;
    position: fixed;
    text-align: center;
    background-color: white;
    padding: 32px 30px;
    margin-top: 8px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 8px 32px;
`;

export const StyledLinkButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
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