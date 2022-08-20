import styled from 'styled-components';
import { RED, BLACK } from '@utility/COLORS';

export const StyledTopContainer = styled.div`
    width: 550px;
    margin: 0 auto;
    /* margin: 0 15% 0 35%; */
    text-align: center;
    position: relative;
    padding: 34px 0 60px 0;
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
