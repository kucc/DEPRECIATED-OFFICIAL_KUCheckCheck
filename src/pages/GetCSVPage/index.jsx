import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { NavBar } from '@components/NavBar';

import { authService, firestoreService } from '@/firebase';

const GetCSVPage = () => {
  const [data, setData] = useState('');
  const [attendanceData, setAttendanceData] = useState({});
  const history = useHistory();
  const userInfo = useSelector(state => state.user.currentUser);

  useEffect(() => {
    async function checkUser() {
      const userResult = await firestoreService
        .collection('users')
        .doc(userInfo.uid)
        .get();
      if (userResult.data().role !== '관리자') {
        alert('관리자만 접근할 수 있습니다.');
        history.push('/');
      }
    }
    if (userInfo) checkUser();
  }, [history, userInfo]);

  useEffect(() => {
    async function getCSVData() {
      const userObject = {};
      const attendanceObject = {};
      // userName - userId match object
      const userResult = await firestoreService.collection('users').get();
      userResult.forEach(doc => {
        userObject[doc.id] = doc.data().name;
      });

      var csv = '';
      const courseResult = await firestoreService.collection('courses').get();
      courseResult.forEach(doc => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        csv += '\n';
        csv += `${
          doc.data().courseName
        },1주차,2주차,3주차,4주차,5주차,6주차,7주차,8주차`;
        csv += '\n';
        const attendanceArr = doc.data().courseAttendance;
        attendanceArr.map(user => {
          const userName = userObject[user.id];
          csv += `${userName},`;
          var attendance = user.attendance.join(',');
          attendance = attendance.replace(/0/gi, '출석');
          attendance = attendance.replace(/1/gi, '지각');
          attendance = attendance.replace(/2/gi, '결석');
          // 미입력은 지각으로 처리??
          attendance = attendance.replace(/3/gi, '미입력');
          if (attendanceObject[userName]) {
            attendanceObject[userName].push(
              userName + ',' + doc.data().courseName + ',' + attendance,
            );
          } else {
            attendanceObject[userName] = [
              userName + ',' + doc.data().courseName + ',' + attendance,
            ];
          }
          csv += attendance;
          csv += '\n';
        });
      });
      setData(csv);
      setAttendanceData(attendanceObject);
    }
    getCSVData();
  }, []);

  const handleMemberClick = () => {
    const keys = Object.keys(attendanceData);
    var memberData =
      '이름,세션,1주차,2주차,3주차,4주차,5주차,6주차,7주차,8주차\n';
    keys.map(key => {
      const arr = attendanceData[key];
      const courseNum = arr.length;
      const curretMemberStr = arr.join('\n');
      memberData += curretMemberStr;
      const absentNum = (curretMemberStr.match(/결석/g) || []).length;
      const lateNum = (curretMemberStr.match(/지각/g) || []).length;
      const totalMoney =
        20000 * courseNum - 5000 * absentNum - 3000 * lateNum > 0
          ? 20000 * courseNum - 5000 * absentNum - 3000 * lateNum
          : 0;
      memberData += `\n총금액,세션수:${courseNum} / 결석:${absentNum} / 지각:${lateNum}, , , , , , , , ,${totalMoney}\n\n`;
    });
    saveAs(
      new Blob(['\uFEFF' + memberData], { type: 'text/csv;charset=utf-8' }),
      'kucc_attendance_member.csv',
    );
  };

  return (
    <div>
      <NavBar />
      {authService.currentUser && (
        <>
          <Button
            style={{ width: '100px', height: '50px' }}
            onClick={() =>
              saveAs(
                new Blob(['\uFEFF' + data], {
                  type: 'text/csv;charset=utf-8',
                }),
                'kucc_attendance_session.csv',
              )
            }>
            세션별
          </Button>
          <Button
            style={{ width: '100px', height: '50px' }}
            onClick={handleMemberClick}>
            인원별
          </Button>
        </>
      )}
    </div>
  );
};

export default GetCSVPage;
