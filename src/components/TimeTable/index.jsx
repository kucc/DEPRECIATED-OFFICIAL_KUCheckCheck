import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import TableDragSelect from 'react-table-drag-select';
import 'react-table-drag-select/style.css';

import { firestoreService } from '@/firebase';
import { timeTableSelectedDefault, timeTableTimeList } from '@utility';

import { StyledTableContainer } from './style';

export const TimeTable = ({
  editable,
  selectedData,
  cellData,
  selectedColor,
}) => {
  const [cells, setcells] = useState();
  const [selected, setselected] = useState(timeTableSelectedDefault);
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  useEffect(() => {
    // load timeTable info from firebase
    async function fetchTimeTable() {
      const timeTableData = await firestoreService
        .collection('common')
        .doc('timeTable')
        .get();
      setcells(timeTableData.data());
      // 상위 컴포넌트로 cellData를 보냄.
      cellData && cellData(timeTableData.data());
    }
    fetchTimeTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderText = (specificTime, key) => {
    if (isMobile) {
      if (specificTime[key].value.length < 7) {
        return specificTime[key].value;
      } else {
        return specificTime[key].value.slice(0, 7) + '..';
      }
    } else {
      if (specificTime[key].value.length < 9) {
        return specificTime[key].value;
      } else {
        return specificTime[key].value.slice(0, 9) + '...';
      }
    }
  };

  const renderTd = (index, timeHour, timeMin) => {
    return selected[index].slice(1).map((time, key) => {
      // timeHour : 9, timeMin: 00 => cells.time_9_00
      const specificTime = eval('cells.time_' + timeHour + '_' + timeMin);
      if (specificTime[key].value) {
        // if time exist on Database
        return (
          <td
            style={{ backgroundColor: specificTime[key].color }}
            disabled
            key={key}>
            {renderText(specificTime, key)}
          </td>
        );
      } else if (!editable) {
        // editable : false => disable 활성
        return (
          <td
            style={{ backgroundColor: 'rgb(211, 211, 211)' }}
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
    return timeTableTimeList.map((time, index) => (
      <tr key={index}>
        <td disabled>
          {isMobile
            ? `${time.Hour}:${time.Minute}`
            : `${time.Hour} : ${time.Minute}`}
        </td>
        {renderTd(index + 1, time.Hour, time.Minute)}
      </tr>
    ));
  };

  return (
    <StyledTableContainer selectedColor={selectedColor}>
      {cells && (
        <TableDragSelect
          value={selected}
          onChange={selected => {
            setselected(selected);
            selectedData && selectedData(selected);
          }}>
          <tr style={{ fontFamily: 'NexonBo', fontSize: '18px' }}>
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
};

TimeTable.propTypes = {
  editable: PropTypes.bool,
  selectedData: PropTypes.func,
  cellData: PropTypes.func,
  selectedColor: PropTypes.string,
};
