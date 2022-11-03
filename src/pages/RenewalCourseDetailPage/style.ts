import styled, { css } from 'styled-components';
import { BLACK, RED, LINE_GRAY } from '@utility/COLORS';

export const CourseDetailContainer = styled.div`
    padding: 2rem;
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-around;
    @media(max-width: 1279px){
        display: block;
    }
`;

export const CourseDetailComponent = styled.div<{width:string}>`
    width: ${(props)=>(props.width)};
    min-width: 300px;
    @media (max-width: 1279px) {
        width: inherit;
    }
`;

export const ComponentTitle = styled.h2`
    font-weight: 900;
    margin-left: 1.5rem;
    margin-bottom: 3px;
    border-bottom: 3px solid black;
    display: inline-block;
    padding: 2px 15px;
    text-align: center;
`;
export const CourseDetailCard = styled.div`
    width: 100%;
    border: 2px solid ${LINE_GRAY};
    border-radius: 22px;
    opacity: 1;
    padding: 1.5rem;
    margin-bottom: 48px;
`;

export const CourseDetailCardTitle = styled.div`
    border-bottom: 1px solid ${LINE_GRAY};
    margin-bottom: 10px;
    padding-bottom: 10px;
`;

export const CourseDetailCardContent = styled.div`
    padding: 1.5rem;
`;

export const StyledCourseTop = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1279px) {
    flex-wrap: wrap-reverse;
  }
`;

export const StyledCourseTitle = styled.div<{ isEllipsis: boolean }>`
  font-family: 'sdBo';
  font-size: 28px;
  color: ${BLACK};
  margin-right: 8px;
  @media (max-width: 1279px) {
    font-size: 14px;
    width: 100%;
    white-space: nowrap;
  }
  ${props =>
        props.isEllipsis &&
        css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
`;

export const StyledCourseLanguageImage = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 4px;
  @media (max-width: 1279px) {
    width: 12px;
    height: 12px;
  }
`;


export const StyledCaseSlash = styled.span`
  margin: 0 8px;
  @media (max-width: 1279px) {
    margin: 0 4px;
  }
`;

export const CourseDescription = styled.span`
    font-family: 'sdSb';
    color: ${BLACK};
    .point {
        color: ${RED}
    }
`;

export const CourseDetailTable = styled.table`

`;

export const CourseDetailTableRow = styled.tr`
    display: flex;
    justify-content: start;
    margin: 15px 0;
`;


export const CourseDetailTableHeaderData = styled.th`
    text-align: start;
    width: 60px;
    margin-right: 10px;
    /* font: 600 14px Apple SD Gothic Neo; */

`;

export const LongTableHeaderData = styled(CourseDetailTableHeaderData)`
    width: auto;
    margin-right: 25px;
`

export const CourseDetailTableData = styled.td`
    /* font: 400 14px Apple SD Gothic Neo; */
`;


export const StyledUserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1.5rem;
`;

export const StyledUserEmoji = styled.div`
  font-size: 64px;
`;

export const StyledUserContainer = styled.div`
  width: 100%;
  margin-left: 35px;
`;

export const StyledName = styled.div`
  font-family: 'sdSb';
  font-size: 18px;
  line-height: 32px;
  color: ${BLACK};
  @media (max-width: 1279px) {
    font-size: 16px;
    line-height: 20px;
  }
  span {
    font-family: none;
  }
`;

export const StyledComment = styled.div`
  font: normal normal 300 10px/12px Apple SD Gothic Neo;
  @media (max-width: 1279px) {
    font-size: 10px;
  }
`;

export const StyledLink = styled.a`
    font-size: 45px;
    color: black;
`;

export const CourseStack = styled.div`
    padding-bottom: 3px;
`;