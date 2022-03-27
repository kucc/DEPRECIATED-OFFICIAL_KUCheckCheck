import React from 'react';

import { Select } from 'antd';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { word } from '@utility';

import {
  StyledAbsent,
  StyledAttend,
  StyledBox,
  StyledEmoji,
  StyledRoundBox,
} from './style';

const { Option } = Select;

const MCourseAttendanceCard = ({
  userEmoji,
  userName,
  courseAttendanceData,
  isEditMode,
  setDefaultValue,
  handleSelected,
}) => {
  const history = useHistory();
  return (
    <div style={{ marginTop: '30px' }}>
      <StyledBox
        className='out-shadow-middle'
        onClick={() => history.push(`/userpage/${courseAttendanceData.id}`)}>
        <StyledEmoji>{userEmoji}</StyledEmoji>
        <p>{userName}</p>
      </StyledBox>
      <StyledRoundBox className='in-shadow-middle'>
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
                    height: 45,
                    width: 70,
                    fontSize: '10px',
                    marginLeft: '5px',
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
                  <Option key={`3_${index}`} value={word.null}>
                    {word.late}
                  </Option>
                </Select>
              );
            }
          })}
      </StyledRoundBox>
    </div>
  );
};

export default MCourseAttendanceCard;

MCourseAttendanceCard.propTypes = {
  userEmoji: PropTypes.string,
  userName: PropTypes.string,
  courseAttendanceData: PropTypes.object,
  isEditMode: PropTypes.bool,
  setDefaultValue: PropTypes.func,
  handleSelected: PropTypes.func,
};
