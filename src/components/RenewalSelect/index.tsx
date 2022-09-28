import { Dropdown, Menu } from 'antd';
import { StyledDropDown, StyledSearchButton } from './style';
import { StyledDownArrow } from '@utility/COMMON_STYLE';

type Props = {
    itemList: string[]
    handleItem: (item: string) => void
    label: string
    hasArrow?: boolean
}
// TODO: antd 제거하고 ui 구현하기
export const RenewalSelect = ({ itemList, handleItem, label, hasArrow = true }: Props) => {
  
    const menu = (
      <Menu>
        {itemList &&
          itemList.map((item, key) => {
            return (
              <Menu.Item key={key}>
                <a onClick={() => handleItem(item)}>
                  {item}
                </a>
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
              { hasArrow ? <StyledDownArrow style={{width: 5}} /> : {}}
              {label}
            </>
            </StyledSearchButton>
        </Dropdown>
      </StyledDropDown>
    )
}