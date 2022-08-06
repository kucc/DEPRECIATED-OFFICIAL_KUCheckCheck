import styled from 'styled-components';
import { MAIN_COLOR, TEXT_COLOR } from '@utility/COLORS';

export const StyledTopContainer = styled.div`
    width: 550px;
    /* margin: 0 auto; */
    margin: 0 15% 0 35%;
    text-align: center;
    position: relative;
    padding: 34px 0 60px 0;
`;

export const StyledMainText = styled.div`
    font-size: 70px;
    font-family: "tmoneyBo";
    line-height: 80px;
    color: ${TEXT_COLOR};
    &.main {
        color: ${MAIN_COLOR};
    }
`;

export const StyledContentText = styled.div`
    font-size: 26px;
    color: ${TEXT_COLOR};
    margin-top: 22px;
`;

export const StyledPeriodToolTip = styled.div`
    width: 460px;
    font-size: 18px;
    font-family: "tmoneyBo";
    background: white;
    padding: 18px 54px;   
    border-radius: 45px;
    box-shadow: 0px 0px 8px #DEDEDE;
    position: absolute;
    top: 31%;
    right: -68%;
`;

export const StyledHighLightText = styled.span`
    font-family: "tmoneyBo";
    color: ${MAIN_COLOR};
`;