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

function TimeTable({ editable, selectedData, cellData, selectedColor }) {
  const [cells, setcells] = useState();
  const [selected, setselected] = useState(selectedDefault);

  useEffect(() => {
    firestoreService
      .collection("common")
      .doc("timeTable")
      .get()
      .then((doc) => {
        setcells(doc.data());
        cellData && cellData(doc.data());
      });
  }, []);

  const renderTd = (index, timeHour, timeMin) => {
    return selected[index].slice(1).map((time, key) => {
      if (eval("cells.time_" + timeHour + "_" + timeMin)[key].value) {
        return (
          <td
            style={{
              backgroundColor: eval("cells.time_" + timeHour + "_" + timeMin)[
                key
              ].color,
            }}
            disabled
            key={key}
          >
            {eval("cells.time_" + timeHour + "_" + timeMin)[key].value}
          </td>
        );
      } else if (!editable) {
        return (
          <td
            disabled
            style={{ backgroundColor: "rgb(221, 221, 221)" }}
            key={key}
          />
        );
      } else {
        return <td key={key} />;
      }
    });
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
          <tr>
            <td disabled>9 : 00</td>
            {renderTd(1, 9, "00")}
          </tr>
          <tr>
            <td disabled>9 : 30</td>
            {renderTd(2, 9, "30")}
          </tr>
          <tr>
            <td disabled>10 : 00</td>
            {renderTd(3, 10, "00")}
          </tr>
          <tr>
            <td disabled>10 : 30</td>
            {renderTd(4, 10, "30")}
          </tr>
          <tr>
            <td disabled>11 : 00</td>
            {renderTd(5, 11, "00")}
          </tr>
          <tr>
            <td disabled>11 : 30</td>
            {renderTd(6, 11, "30")}
          </tr>
          <tr>
            <td disabled>12 : 00</td>
            {renderTd(7, 12, "00")}
          </tr>
          <tr>
            <td disabled>12 : 30</td>
            {renderTd(8, 12, "30")}
          </tr>
          <tr>
            <td disabled>13 : 00</td>
            {renderTd(9, 13, "00")}
          </tr>
          <tr>
            <td disabled>13 : 30</td>
            {renderTd(10, 13, "30")}
          </tr>
          <tr>
            <td disabled>14 : 00</td>
            {renderTd(11, 14, "00")}
          </tr>
          <tr>
            <td disabled>14 : 30</td>
            {renderTd(12, 14, "30")}
          </tr>
          <tr>
            <td disabled>15 : 00</td>
            {renderTd(13, 15, "00")}
          </tr>
          <tr>
            <td disabled>15 : 30</td>
            {renderTd(14, 15, "30")}
          </tr>
          <tr>
            <td disabled>16 : 00</td>
            {renderTd(15, 16, "00")}
          </tr>
          <tr>
            <td disabled>16 : 30</td>
            {renderTd(16, 16, "30")}
          </tr>
          <tr>
            <td disabled>17 : 00</td>
            {renderTd(17, 17, "00")}
          </tr>
          <tr>
            <td disabled>17 : 30</td>
            {renderTd(18, 17, "30")}
          </tr>
          <tr>
            <td disabled>18 : 00</td>
            {renderTd(19, 18, "00")}
          </tr>
          <tr>
            <td disabled>18 : 30</td>
            {renderTd(20, 18, "30")}
          </tr>
          <tr>
            <td disabled>19 : 00</td>
            {renderTd(21, 19, "00")}
          </tr>
          <tr>
            <td disabled>19 : 30</td>
            {renderTd(22, 19, "30")}
          </tr>
          <tr>
            <td disabled>20 : 00</td>
            {renderTd(23, 20, "00")}
          </tr>
          <tr>
            <td disabled>20 : 30</td>
            {renderTd(24, 20, "30")}
          </tr>
          <tr>
            <td disabled>21 : 00</td>
            {renderTd(25, 21, "00")}
          </tr>
          <tr>
            <td disabled>21 : 30</td>
            {renderTd(26, 21, "30")}
          </tr>
          <tr>
            <td disabled>22 : 00</td>
            {renderTd(27, 22, "00")}
          </tr>
          <tr>
            <td disabled>22 : 30</td>
            {renderTd(28, 22, "30")}
          </tr>
        </TableDragSelect>
      )}
    </StyledTableContainer>
  );
}

export default TimeTable;
