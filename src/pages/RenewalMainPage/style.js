import styled from 'styled-components';
import { LINE_GRAY } from '@utility/COLORS';

export const MainBottomContainer = styled.div`
    display: flex;
`;

export const StyledMainCourse = styled.div`
    width: calc(100% - 302px);
    padding: 0 24px;
`;

export const StyledUserContainer = styled.div`
    width: 302px;
    border: 2px solid ${LINE_GRAY};
    border-radius: 17px;
    padding: 22px 26px;
`;