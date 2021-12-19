import { Button } from "antd";
import React, { useState } from "react";
import TimeTable from "../../../../components/TimeTable/TimeTable";

function TimeTableSave({ courseInfo, courseId, timeTableInfo }) {
  const [selectedData, setselectedData] = useState([]);
  const [cellData, setcellData] = useState([]);

  const renderselectedData = (index, randomColor, timeHour, timeMin) => {
    return selectedData[index].slice(1).map((data, key) => {
      if (eval("cellData.time_" + timeHour + "_" + timeMin)[key].value) {
        return {
          ...eval("cellData.time_" + timeHour + "_" + timeMin)[key],
        };
      } else if (data == true) {
        return {
          color: randomColor,
          value: courseInfo.courseName,
          courseId: courseId,
        };
      } else {
        return { color: "", value: "", courseId: "" };
      }
    });
  };

  const handleSubmit = () => {
    // 밝은 색 중 선택하게 변경
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const courseNewTimeTable = {
      time_9_00: renderselectedData(1, randomColor, 9, "00"),
      time_9_30: renderselectedData(2, randomColor, 9, "30"),
      time_10_00: renderselectedData(3, randomColor, 10, "00"),
      time_10_30: renderselectedData(4, randomColor, 10, "30"),
      time_11_00: renderselectedData(5, randomColor, 11, "00"),
      time_11_30: renderselectedData(6, randomColor, 11, "30"),
      time_12_00: renderselectedData(7, randomColor, 12, "00"),
      time_12_30: renderselectedData(8, randomColor, 12, "30"),
      time_13_00: renderselectedData(9, randomColor, 13, "00"),
      time_13_30: renderselectedData(10, randomColor, 13, "30"),
      time_14_00: renderselectedData(11, randomColor, 14, "00"),
      time_14_30: renderselectedData(12, randomColor, 14, "30"),
      time_15_00: renderselectedData(13, randomColor, 15, "00"),
      time_15_30: renderselectedData(14, randomColor, 15, "30"),
      time_16_00: renderselectedData(15, randomColor, 16, "00"),
      time_16_30: renderselectedData(16, randomColor, 16, "30"),
      time_17_00: renderselectedData(17, randomColor, 17, "00"),
      time_17_30: renderselectedData(18, randomColor, 17, "30"),
      time_18_00: renderselectedData(19, randomColor, 18, "00"),
      time_18_30: renderselectedData(20, randomColor, 18, "30"),
      time_19_00: renderselectedData(21, randomColor, 19, "00"),
      time_19_30: renderselectedData(22, randomColor, 19, "30"),
      time_20_00: renderselectedData(23, randomColor, 20, "00"),
      time_20_30: renderselectedData(24, randomColor, 20, "30"),
      time_21_00: renderselectedData(25, randomColor, 21, "00"),
      time_21_30: renderselectedData(26, randomColor, 21, "30"),
      time_22_00: renderselectedData(27, randomColor, 22, "00"),
      time_22_30: renderselectedData(28, randomColor, 22, "30"),
    };
    timeTableInfo(courseNewTimeTable);
  };
  return (
    <div>
      <TimeTable
        editable="true"
        selectedData={(selectedData) => setselectedData(selectedData)}
        cellData={(cellData) => setcellData(cellData)}
      />
      <Button onClick={handleSubmit}>저장하기</Button>
    </div>
  );
}

export default TimeTableSave;
