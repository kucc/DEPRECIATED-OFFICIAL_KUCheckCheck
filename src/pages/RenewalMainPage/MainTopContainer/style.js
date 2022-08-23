import styled from 'styled-components';
import { RED, BLACK } from '@utility/COLORS';

export const StyledTopContainer = styled.div`
    width: 550px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    padding: 84px 0 60px 0;
`;

export const StyledMainText = styled.div`
    font-size: 72px;
    font-family: "tmoneyBo";
    line-height: 80px;
    color: ${BLACK};
    &.main {
        color: ${RED};
    }
`;

export const StyledContentText = styled.div`
    font-size: 22px;
    color: ${BLACK};
    margin-top: 22px;
`;

export const StyledSpeechBubbleContainer = styled.div`
    width: 384px;
    height: 86px;
    position: absolute;
    top: -14px;
    right: 0;
`;
export const StyledSpeechBody = styled.div`
    position: relative;
`;
export const StyledSpeechText = styled.div`
    position: absolute;
    top: 24px;
    width: 100%;
    font-family: 'tmoneyBo';
    font-size: 14px;
    color: ${BLACK};
`;

export const StyledHighLightText = styled.span`
    font-family: 'tmoneyBo';
    color: ${RED};
`;