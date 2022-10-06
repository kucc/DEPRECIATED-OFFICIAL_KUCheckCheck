import { useCallback, useState } from 'react';

import { Dropdown, Menu } from 'antd';

import { StyledDownArrow } from '@utility/COMMON_STYLE';

import { StyledDropDown, StyledSearchButton } from './style';

type Props<T> = {
  items: T[];
  handleItem: (item: T) => void;
  placeholder: string;
  hasArrow?: boolean;
};

// TODO:
// 1. antd 제거하고 ui 구현하기
// 2. div -> select element 로 변경 후 react-hook-form 적용하기
export const RenewalSelect = <T extends string | number>({
  items,
  handleItem,
  placeholder,
  hasArrow = true,
}: Props<T>) => {
  const [innerValue, setInnerValue] = useState<T | undefined>();

  const handleClick = useCallback(
    (item: T) => {
      handleItem(item);
      setInnerValue(item);
    },
    [handleItem],
  );

  const menu = (
    <Menu>
      {items &&
        items.map((item, key) => {
          return (
            <Menu.Item key={key}>
              <a onClick={() => handleClick(item)}>{item}</a>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <StyledDropDown>
      <Dropdown overlay={menu} placement='bottomLeft'>
        <StyledSearchButton>
          <>
            {hasArrow ? <StyledDownArrow style={{ width: 5 }} /> : {}}
            {innerValue ?? placeholder}
          </>
        </StyledSearchButton>
      </Dropdown>
    </StyledDropDown>
  );
};
