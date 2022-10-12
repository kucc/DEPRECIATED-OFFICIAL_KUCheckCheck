import { Button } from 'antd';
import styled from 'styled-components';

import { BLACK, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledDropDown = styled.div`
  display: inline-block;
  .ant-btn {
    &:hover,
    &:focus {
      color: ${RED};
      border-color: ${RED};
      i {
        border-color: ${RED};
      }
    }
  }
  @media (max-width: 1279px) {
    order: 1;
    &:last-child {
      margin-left: 5px;
    }
  }
`;

export const StyledSearchButton = styled(Button)`
  width: auto;
  height: auto;
  padding: 16px 32px;
  font-size: 18px;
  color: ${BLACK};
  background-color: white;
  border-radius: 30px;
  border: 1px solid ${LINE_GRAY};
  span {
    font-family: 'sdBo';
  }
  i {
    margin-right: 12px;
  }
  @media (max-width: 1279px) {
    width: auto;
    height: auto;
    padding: 8px 20px;
    font-size: 14px;
    i {
      margin-right: 6px;
    }
  }
`;
