import styled from 'styled-components';
import { BLACK, LINE_GRAY, GRAY } from '@utility/COLORS';

export const StyledCourseContainer = styled.div`
    min-height: 700px;
    margin-bottom: 92px;
`;

export const StyledCourseTab = styled.div`
    padding: 12px 0;
    border-bottom: 1px solid ${LINE_GRAY};
`;

export const StyledTab = styled.button`
    font-size: 24px;
    padding: 0 42px;
    border: none;
    background-color: white;
    cursor: pointer;
    border-right: 1px solid ${LINE_GRAY};
    &:last-child {
        border: none;
    }
`;

export const StyledTabText = styled.span`
    color: ${GRAY};
    font-size: 24px;
    font-family: "sdBo";
    padding: 14px 12px;
    &.active {
        color: ${BLACK};
        border-bottom: 3px solid ${BLACK};
    }
`;