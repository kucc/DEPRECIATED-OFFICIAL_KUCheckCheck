import styled from 'styled-components';
import { BLACK, BACKGROUND_FOOTER , GRAY} from '@utility/COLORS';

export const StyledFooterContainer = styled.div`
    background-color: ${BACKGROUND_FOOTER};
    color: ${BLACK};
    padding: 52px 96px 92px 96px;
`;

export const StyledFooter = styled.div`
    width: 1280px;
    margin: 0 auto;
    @media (max-width: 1279px) {
        width: 100%;
    }
`;

export const StyledFooterMargin = styled.div`
    margin: 0 302px 0 136px;
`;

export const StyledRow = styled.div`
    display: flex;
    margin-bottom: 8px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const StyledTitle = styled.div`
    width: 165px;
    font-size: 16px;
    font-family: "tmoneyBo";
`;

export const StyledSubContent = styled.span`
    font-size: 14px;
    font-family: 'sdBo';
    margin-right: 8px;
`;

export const StyledContent = styled.div`
    font-size: 14px;
    font-family: 'sdLi';
`;

export const StyledHorizontalLine = styled.div`
  height: 1px;
  border-bottom: 1px solid ${GRAY};
  margin: 36px 0;
`;

export const StyledFooterGithubLink = styled.a`
    font-size: 14px;
    font-family: 'sdLi';
    color: ${BLACK};
`;

export const StyledCopyRight = styled.span`
    margin-left: 10px;
    font-family: 'sdLi';
    span {
        font-family: 'sdBo';
    }
`;