import styled, { css } from 'styled-components';
import { YELLOW, BLACK, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledMainCourseContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 28px 60px 20px 45px;
    border: 2px solid ${LINE_GRAY};
    border-radius: 26px;
    margin-top: 12px;
    cursor: pointer;
    &:first-child {
        margin-top: 24px;
    }
    &:hover {
        box-shadow: 0px 0px 10px ${LINE_GRAY};
    }
`;

export const StyledLeader = styled.div`
    font-size: 14px;
    color: ${BLACK};
    margin-right: 35px;
`;

export const StyledEmojiBackground = styled.div`
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-color: ${YELLOW};
    position: relative;
    margin: 0 auto;
`;

export const StyledEmoji = styled.span`
    font-size: 48px;
    position: absolute;
    top: -7px;
    left: 4px;
`;

export const StyledLeaderName = styled.div`
    font-family: 'sdSb';
    margin-top: 8px;
`;

export const StyledLeaderType = styled.span`
    font-family: 'sdL';
    margin-left: 2px;
`;

export const StyledCourseTop = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledCourseTitle = styled.div`
    font-family: 'sdBo';
    font-size: 30px;
    color: ${BLACK};
    margin-right: 8px;
    ${props => props.isEllipsis && css`
        width: 305px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    `}
`;

export const StyledCourseLanguageImage = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 4px;
`;

export const StyledCourseBottom = styled.div`

`;

export const StyledCourseCase = styled.span`
    font-family: 'sdSb';
    font-size: 18px;
    color: ${BLACK};
`;

export const StyledCaseSlash = styled.span`
    margin: 0 8px;
`;
export const StyledCourseCaseValue = styled.span`
    color: ${RED};
`;

export const StyledCourseButton = styled.button`
    width: 192px;
    height: 50px;
    margin-left: auto;
    border-radius: 25px;
    border: none;
    background-color: ${RED};
    color: white;
`;
