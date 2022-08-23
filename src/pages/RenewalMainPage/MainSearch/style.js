import styled from 'styled-components';
import { Button } from 'antd';
import { BLACK, LINE_GRAY, BACKGROUND_GRAY, GRAY, RED } from '@utility/COLORS';

export const StyledMainSearchContainer = styled.div`
    display: flex;
    height: 60px;
    margin-bottom: 30px;
`;

export const StyledDropDown = styled.div`
    width: 154px;
    display: inline-block;
    .ant-btn {
        &:hover, &:focus {
            color: ${RED};
            border-color: ${RED};
            i {
                border-color: ${RED};
            }
        }
    }
`;

export const StyledSearchButton = styled(Button)`
    width: 100%;
    height: 54px;
    color: ${BLACK};
    background-color: white;
    border-radius: 30px;
    border: 1px solid ${LINE_GRAY};
    span {
        font-family: 'sdBo';
        font-size: 18px;
    }
    i {
        margin-right: 12px;
    }
`;

export const StyledSearchContainer = styled.div`
    position: relative;
    margin: 0 10px;
    svg {
        position: absolute;
        left: 37px;
        top: 16px;
    }
`;

export const StyledSearchInput = styled.input`
    width: 474px;
    height: 54px;
    border: 1px solid ${LINE_GRAY};
    border-radius: 39px;
    background-color: ${BACKGROUND_GRAY};
    font-family: 'sdLi';
    font-size: 20px;
    padding-left: 76px;
    &::placeholder {
        color: ${GRAY};
    }
`;