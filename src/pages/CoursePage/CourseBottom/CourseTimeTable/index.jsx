import React, { useState } from 'react';

import { Button } from 'antd';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';

import { TimeTable } from '@components';

import { MAIN_COLOR } from '@utility';

import {
  StyledColorContainer,
  StyledTimeTable,
  StyledTimeTableContainer,
} from './style';

function CourseTimeTable({ courseData, courseId, newCourseDataTime }) {
  const [selectedData, setselectedData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [cellData, setcellData] = useState([]);
  const [selectedColor, setSelectedColor] = useState(MAIN_COLOR);

  const renderselectedData = (index, selectColor, timeHour, timeMin) => {
    return selectedData[index].slice(1).map((data, key) => {
      if (eval('cellData.time_' + timeHour + '_' + timeMin)[key].value) {
        return {
          ...eval('cellData.time_' + timeHour + '_' + timeMin)[key],
        };
      } else if (data == true) {
        return {
          color: selectColor,
          value: courseData.courseName,
          courseId: courseId,
        };
      } else {
        return { color: '', value: '', courseId: '' };
      }
    });
  };

  const handleSubmit = () => {
    const courseNewTimeTable = {
      time_9_00: renderselectedData(1, selectedColor, 9, '00'),
      time_9_30: renderselectedData(2, selectedColor, 9, '30'),
      time_10_00: renderselectedData(3, selectedColor, 10, '00'),
      time_10_30: renderselectedData(4, selectedColor, 10, '30'),
      time_11_00: renderselectedData(5, selectedColor, 11, '00'),
      time_11_30: renderselectedData(6, selectedColor, 11, '30'),
      time_12_00: renderselectedData(7, selectedColor, 12, '00'),
      time_12_30: renderselectedData(8, selectedColor, 12, '30'),
      time_13_00: renderselectedData(9, selectedColor, 13, '00'),
      time_13_30: renderselectedData(10, selectedColor, 13, '30'),
      time_14_00: renderselectedData(11, selectedColor, 14, '00'),
      time_14_30: renderselectedData(12, selectedColor, 14, '30'),
      time_15_00: renderselectedData(13, selectedColor, 15, '00'),
      time_15_30: renderselectedData(14, selectedColor, 15, '30'),
      time_16_00: renderselectedData(15, selectedColor, 16, '00'),
      time_16_30: renderselectedData(16, selectedColor, 16, '30'),
      time_17_00: renderselectedData(17, selectedColor, 17, '00'),
      time_17_30: renderselectedData(18, selectedColor, 17, '30'),
      time_18_00: renderselectedData(19, selectedColor, 18, '00'),
      time_18_30: renderselectedData(20, selectedColor, 18, '30'),
      time_19_00: renderselectedData(21, selectedColor, 19, '00'),
      time_19_30: renderselectedData(22, selectedColor, 19, '30'),
      time_20_00: renderselectedData(23, selectedColor, 20, '00'),
      time_20_30: renderselectedData(24, selectedColor, 20, '30'),
      time_21_00: renderselectedData(25, selectedColor, 21, '00'),
      time_21_30: renderselectedData(26, selectedColor, 21, '30'),
      time_22_00: renderselectedData(27, selectedColor, 22, '00'),
      time_22_30: renderselectedData(28, selectedColor, 22, '30'),
    };
    newCourseDataTime(courseNewTimeTable);
  };
  return (
    <StyledTimeTableContainer>
      <StyledColorContainer>
        <Button onClick={handleSubmit}>저장하기</Button>
        <ul>
          <li>동방을 사용하는 활동만 시간표 등록을 해주세요!</li>
          <li>최대한 다양한 색깔로 선택해주세요.</li>
          <li>
            시간표는 한번 등록시 수정이 어렵습니다. 만약 잘못 등록하셨다면,
            jjs01hwang@gmail(이희준)으로 메일이나 갠톡 주시면
            해결해드리겠습니다!
          </li>
          <li style={{ fontFamily: 'NexonBo' }}>
            저장 버튼을 누르셔야 저장이 됩니다.
          </li>
        </ul>
        <CirclePicker
          color={selectedColor}
          onChangeComplete={color => setSelectedColor(color.hex)}
        />
      </StyledColorContainer>
      <StyledTimeTable>
        <TimeTable
          editable={true}
          selectedData={selectedData => setselectedData(selectedData)}
          cellData={cellData => setcellData(cellData)}
          selectedColor={selectedColor}
        />
      </StyledTimeTable>
    </StyledTimeTableContainer>
  );
}

export default CourseTimeTable;

CourseTimeTable.propTypes = {
  courseData: PropTypes.object,
  courseId: PropTypes.string,
  newCourseDataTime: PropTypes.func,
};
