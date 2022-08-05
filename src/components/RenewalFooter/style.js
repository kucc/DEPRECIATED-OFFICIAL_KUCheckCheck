import styled from 'styled-components';

export const StyledFooterContainer = styled.div`
    background-color: #F8F8F8;
    color: #000000;
    padding: 52px 96px 92px 96px;
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
    margin-right: 8px;
`;

export const StyledContent = styled.div`
    font-size: 14px;
`;

export const StyledHorizontalLine = styled.div`
  height: 1px;
  border-bottom: 1px solid #b6b6b677;
  margin: 36px 0;
`;

export const StyledFooterGithubLink = styled.a`
    font-size: 14px;
    color: #000000;
`;

export const StyledCopyRight = styled.span`
    margin-left: 10px;
`;