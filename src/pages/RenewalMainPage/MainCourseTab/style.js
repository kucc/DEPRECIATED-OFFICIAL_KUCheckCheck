import styled, { css } from 'styled-components';
import { BLACK, LINE_GRAY, GRAY } from '@utility/COLORS';

export const StyledCourseContainer = styled.div`
    min-height: 700px;
    margin-bottom: 92px;
    @media (max-width: 1279px) {
        margin-bottom: 52px;
    }
`;

export const StyledCourseTab = styled.div`
    padding: 12px 0;
    margin-bottom: 24px;
    border-bottom: 1px solid ${LINE_GRAY};
    @media (max-width: 1279px) {
        padding: 8px 0;
        margin-bottom: 12px;
    }
`;

export const StyledTab = styled.button`
    padding: 0 36px;
    border: none;
    background-color: white;
    cursor: pointer;
    border-right: 1px solid ${LINE_GRAY};
    &:last-child {
        border: none;
    }
    @media (max-width: 1279px) {
        padding: 0 20px;
    }
`;

export const StyledTabText = styled.span`
    color: ${GRAY};
    font-size: 18px;
    font-family: "sdBo";
    padding: 14px 12px;
    ${props => props.active && css`
        color: ${BLACK};
        border-bottom: 3px solid ${BLACK};
    `}
    @media (max-width: 1279px) {
        font-size: 12px;
        padding: 8px 0;
    }
`;