import React from 'react';

import { Button, Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { StyledDropDown, StyledMainSearchContainer } from './style';

export const MainSearch = ({ currentSemester, handleCurrentSemester }) => {
  const { pastSemester } = useSelector(state => state.common.commonInfo.data);

  const SemesterMenu = (
    // 학기를 클릭했을 때 해야할 일
    <Menu>
      {pastSemester &&
        pastSemester.map((semester, key) => {
          return (
            <Menu.Item key={key}>
              <a onClick={() => handleCurrentSemester(semester)}>
                {semester} 학기
              </a>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <StyledMainSearchContainer>
      <StyledDropDown>
        <Dropdown overlay={SemesterMenu} placement='bottomLeft'>
          <Button
            type='danger'
            style={{
              width: '100%',
              height: '40px',
              borderRadius: '25px',
              // backgroundColor: MAIN_COLOR,
              // borderColor: MAIN_COLOR,
              fontSize: '13px',
            }}>
            {currentSemester} 학기
          </Button>
        </Dropdown>
      </StyledDropDown>
    </StyledMainSearchContainer>
  );
};

MainSearch.propTypes = {
  currentSemester: PropTypes.string,
  handleCurrentSemester: PropTypes.func,
};
