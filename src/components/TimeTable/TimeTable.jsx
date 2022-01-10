import React, { useEffect, useState } from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import { StyledTableContainer } from "./style";
import { firestoreService } from "../../firebase";

const selectedDefault = [
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
];

const timeList = [
  {
    Hour: 9,
    Minute: "00",
  },
  {
    Hour: 9,
    Minute: "30",
  },
  {
    Hour: 10,
    Minute: "00",
  },
  {
    Hour: 10,
    Minute: "30",
  },
  {
    Hour: 11,
    Minute: "00",
  },
  {
    Hour: 11,
    Minute: "30",
  },
  {
    Hour: 12,
    Minute: "00",
  },
  {
    Hour: 12,
    Minute: "30",
  },
  {
    Hour: 13,
    Minute: "00",
  },
  {
    Hour: 13,
    Minute: "30",
  },
  {
    Hour: 14,
    Minute: "00",
  },
  {
    Hour: 14,
    Minute: "30",
  },
  {
    Hour: 15,
    Minute: "00",
  },
  {
    Hour: 15,
    Minute: "30",
  },
  {
    Hour: 16,
    Minute: "00",
  },
  {
    Hour: 16,
    Minute: "30",
  },
  {
    Hour: 17,
    Minute: "00",
  },
  {
    Hour: 17,
    Minute: "30",
  },
  {
    Hour: 18,
    Minute: "00",
  },
  {
    Hour: 18,
    Minute: "30",
  },
  {
    Hour: 19,
    Minute: "00",
  },
  {
    Hour: 19,
    Minute: "30",
  },
  {
    Hour: 20,
    Minute: "00",
  },
  {
    Hour: 20,
    Minute: "30",
  },
  {
    Hour: 21,
    Minute: "00",
  },
  {
    Hour: 21,
    Minute: "30",
  },
  {
    Hour: 22,
    Minute: "00",
  },
  {
    Hour: 22,
    Minute: "30",
  },
];

function TimeTable({ editable, selectedData, cellData, selectedColor }) {
  const [cells, setcells] = useState();
  const [selected, setselected] = useState(selectedDefault);

  useEffect(() => {
    // load timeTable info from firebase
    async function loadTimeTable() {
      const timeTableData = await firestoreService
        .collection("common")
        .doc("timeTable")
        .get();
      setcells(timeTableData.data());
      // 상위 컴포넌트로 cellData를 보냄.
      cellData && cellData(timeTableData.data());
    }
    loadTimeTable();
  }, []);

  const renderTd = (index, timeHour, timeMin) => {
    return selected[index].slice(1).map((time, key) => {
      // timeHour : 9, timeMin: 00 => cells.time_9_00
      const specificTime = eval("cells.time_" + timeHour + "_" + timeMin);
      if (specificTime[key].value) {
        // if time exist on Database
        return (
          <td
            style={{ backgroundColor: specificTime[key].color }}
            disabled
            key={key}
          >
            {specificTime[key].value}
          </td>
        );
      } else if (!editable) {
        // editable : false => disable 활성
        return (
          <td
            style={{ backgroundColor: "rgb(211, 211, 211)" }}
            disabled
            key={key}
          />
        );
      } else {
        return <td key={key} />;
      }
    });
  };

  const renderTr = () => {
    return timeList.map((time, index) => (
      <tr key={index}>
        <td disabled>{`${time.Hour} : ${time.Minute}`}</td>
        {renderTd(index + 1, time.Hour, time.Minute)}
      </tr>
    ));
  };

  return (
    <StyledTableContainer selectedColor={selectedColor}>
      {cells && (
        <TableDragSelect
          value={selected}
          onChange={(selected) => {
            setselected(selected);
            selectedData && selectedData(selected);
          }}
        >
          <tr style={{ fontFamily: "NexonBo", fontSize: "18px" }}>
            <td disabled />
            <td disabled>일</td>
            <td disabled>월</td>
            <td disabled>화</td>
            <td disabled>수</td>
            <td disabled>목</td>
            <td disabled>금</td>
            <td disabled>토</td>
          </tr>
          {renderTr()}
        </TableDragSelect>
      )}
    </StyledTableContainer>
  );
}

export default TimeTable;
