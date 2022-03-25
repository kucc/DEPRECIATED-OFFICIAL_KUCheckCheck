import React, { useEffect, useState } from 'react';

import { Button, Select } from 'antd';

import { firestoreService } from '@/firebase';

const { Option } = Select;
const AddUser = () => {
  const [userData, setUserData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const getAllUserData = async () => {
    const userResult = await firestoreService.collection('users').get();
    const newUserData = [];
    userResult.forEach(user => {
      newUserData.push({ id: user.id, name: user.data().name });
    });
    setUserData(newUserData);
  };

  const getCourseData = async () => {
    const courseResult = await firestoreService.collection('courses').get();
    const newCourseData = [];
    courseResult.forEach(course => {
      newCourseData.push({
        id: course.id,
        name: course.data().courseName,
        semester: course.data().semester,
      });
    });
    setCourseData(newCourseData);
  };

  const onButtonClicked = async () => {
    const selectedUserData = await firestoreService
      .collection('users')
      .doc(selectedUser)
      .get();
    const selectedCourseData = await firestoreService
      .collection('courses')
      .doc(selectedCourse)
      .get();

    const {
      courseInfo,
      courseLeader,
      courseName,
      courseType,
      difficulty,
      language,
      requireTime,
      semester,
    } = selectedCourseData.data();

    const newCourseHistory = selectedUserData.data().courseHistory;
    newCourseHistory.push({
      courseInfo,
      courseLeader,
      courseName,
      courseType,
      difficulty,
      language,
      requireTime,
      semester,
      id: selectedCourseData.id,
    });

    // console.log(newCourseHistory);

    await firestoreService.collection('users').doc(selectedUser).update({
      courseHistory: newCourseHistory,
    });
    alert('성공!');
    // selectedUser;
    // selectedCourse;
  };

  useEffect(() => {
    getAllUserData();
    getCourseData();
  }, []);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Select
        onChange={value => setSelectedUser(value)}
        style={{ width: '350px' }}>
        {userData.length > 0 &&
          userData.map((user, index) => (
            <Option key={index} value={user.id} style={{ fontSize: '11px' }}>
              {user.id + '/' + user.name}
            </Option>
          ))}
      </Select>
      {'  =>  '}
      <Select
        onChange={value => setSelectedCourse(value)}
        style={{ width: '350px' }}>
        {courseData.length > 0 &&
          courseData.map((course, index) => (
            <Option key={index} value={course.id} style={{ fontSize: '11px' }}>
              {course.id + '/' + course.name + '/' + course.semester}
            </Option>
          ))}
      </Select>
      <Button onClick={onButtonClicked}>GO!</Button>
    </div>
  );
};

export default AddUser;
