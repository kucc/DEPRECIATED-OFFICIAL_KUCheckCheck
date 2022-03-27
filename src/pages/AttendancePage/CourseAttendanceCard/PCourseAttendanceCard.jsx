import React from 'react';

import { Select } from 'antd';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { word } from '@utility';

import {
  StyledAbsent,
  StyledAttend,
  StyledAttendanceBox,
  StyledBox,
  StyledContainer,
  StyledEmoji,
} from './style';

const { Option } = Select;

const PCourseAttendanceCard = ({
  userEmoji,
  userName,
  courseAttendanceData,
  isEditMode,
  setDefaultValue,
  handleSelected,
}) => {
  const history = useHistory();

  return (
    <StyledContainer>
      <StyledBox
        className='out-shadow-middle'
        onClick={() => history.push(`/userpage/${courseAttendanceData.id}`)}>
        <StyledEmoji>{userEmoji}</StyledEmoji>
        <p>{userName}</p>
      </StyledBox>
      <StyledAttendanceBox className='in-shadow-weak'>
        {courseAttendanceData &&
          courseAttendanceData.attendance.map((state, index) => {
            if (isEditMode === false) {
              //출석 수정 모드가 아닐 때
              if (state === 0)
                return <StyledAttend key={index}>{word.attend}</StyledAttend>;
              else if (state === 1)
                return <StyledAbsent key={index}>{word.absent}</StyledAbsent>;
              else if (state === 2)
                return <StyledAbsent key={index}>{word.late}</StyledAbsent>;
              else if (state === 3)
                return <StyledAttend key={index}>{word.null}</StyledAttend>;
            } else {
              //출석 수정 모드일 때
              return (
                <Select
                  key={index}
                  defaultValue={setDefaultValue(state)}
                  style={{
                    width: 80,
                  }}
                  onChange={handleSelected}>
                  <Option key={`0_${index}`} value={word.attend}>
                    {word.attend}
                  </Option>
                  <Option key={`1_${index}`} value={word.absent}>
                    {word.absent}
                  </Option>
                  <Option key={`2_${index}`} value={word.late}>
                    {word.late}
                  </Option>
                  {/*
                  null 값은 선택할 수 없게 함.
                  <Option key={`3_${index}`} value={word.null}>
                    {word.null}
                  </Option> */}
                </Select>
              );
            }
          })}
      </StyledAttendanceBox>
    </StyledContainer>
  );
};

export default PCourseAttendanceCard;

PCourseAttendanceCard.propTypes = {
  userEmoji: PropTypes.string,
  userName: PropTypes.string,
  courseAttendanceData: PropTypes.object,
  isEditMode: PropTypes.bool,
  setDefaultValue: PropTypes.func,
  handleSelected: PropTypes.func,
};
