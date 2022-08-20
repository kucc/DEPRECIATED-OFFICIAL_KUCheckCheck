import styled from 'styled-components';
import { Button } from 'antd';
import { TEXT_COLOR } from '@utility/COLORS';

export const StyledMainSearchContainer = styled.div`
    height: 60px;
    margin-bottom: 30px;
`;

export const StyledDropDown = styled.div`
    width: 203px;
    display: inline-block;
`;

export const StyledSemesterButton = styled(Button)`
    width: 100%;
    height: 60px;
    color: ${TEXT_COLOR};
    background-color: white;
    border-radius: 30px;
    border: 1px solid #DEDEDE;
    span {
        font-family: 'sdBo';
        font-size: 20px;
    }
`;

export const StyledSearchInput = styled.input`
    width: 604px;
    height: 60px;
    border: 1px solid #DEDEDE;
    border-radius: 39px;
`;