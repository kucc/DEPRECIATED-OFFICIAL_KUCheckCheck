import styled from 'styled-components';
import { TEXT_COLOR } from '@utility/COLORS';
export const StyledCourseContainer = styled.div`
`;

export const StyledCourseTab = styled.div`
    padding: 12px 0;
    border-bottom: 1px solid #DEDEDE;
`;

export const StyledTab = styled.button`
    padding: 0 42px;
    border: none;
    background-color: white;
    cursor: pointer;
    border-right: 1px solid #DEDEDE;
    &:last-child {
        border: none;
    }
`;

export const StyledTabText = styled.span`
    color: #B6B6B6;
    font-size: 24px;
    font-weight: 700;
    padding: 14px 12px;
    &.active {
        color: ${TEXT_COLOR};
        border-bottom: 3px solid ${TEXT_COLOR};
    }
`;