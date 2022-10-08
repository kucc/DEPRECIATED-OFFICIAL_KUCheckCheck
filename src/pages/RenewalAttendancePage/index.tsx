import { isMember } from '@utility/COMMON_FUNCTION';

import {
  AttendanceContainer,
  AttendanceHeader,
  AttendanceTable,
  AttendanceTableData,
  AttendanceTableHeaderData,
  AttendanceTableRow,
  AttendanceTitle,
  CourseSelect,
  LeaderButton,
  UserName,
  UserProfile,
  UserRole,
} from './style';

export const RenewalAttendancePage = () => {
  //코스
  const course = {
    id: 13,
    member_id: 23,
    semester_id: 3,
    type: 3,
    difficulty: 'medium',
    require_time: 2,
    title: 'C스터디',
    introduction: '소개',
    goal: '목표',
    progress_date: '매주 목 10시부터 1시간 진행예정',
    max_number: 8,
    place: '동방 or zoom',
    notice: '복습 철저히 부탁드립니다 .',
    language: ['C', 'Database', 'Html'],
    detail_stack: ['Typescript', 'Express', 'NextJS', 'AWS'],
    curriculum: [
      '1주차에는 이걸할거에요',
      '2주차에는 이걸할거에요',
      '3주차에는 이걸할거에요',
      '8주차에는 이걸할거에요',
    ],
  };

  //유저
  const user = {
    id: 23,
    email: 'heehee4898@gmail.com',
    name: '임희선',
    role: 'member',
    emoji: '👨‍🍳',
    comment: 'ㅎㅇ',
    detail_comment: 'ㅎㅇ',
    github_id: 'https://github.com/limheesun4898',
    instagram_id: '',
  };

  //출석
  const attendances = [
    {
      member_id: 23,
      course_id: 13,
      is_master: 1,
      attendance: [0, 0, 0, 1, 0, 0, 2, 0, 3],
    },
    {
      member_id: 23,
      course_id: 13,
      is_master: 1,
      attendance: [0, 0, 0, 1, 0, 0, 2, 0, 3],
    },
  ];
  const attendance_constant: Record<number, string> = { 0: '출석', 1: '결석', 2: '지각', 3: '-' };

  return (
    <AttendanceContainer>
      <AttendanceHeader>
        <AttendanceTitle>출결관리</AttendanceTitle>
        {isMember(user, course) === '팀장' ? <LeaderButton>수정하기</LeaderButton> : null}
        <CourseSelect>
          <option value=''>코스 선택</option>
          {/*코스 호출 api=>(id, title) @규원 */}
        </CourseSelect>
      </AttendanceHeader>
      <AttendanceTable>
        <AttendanceTableRow>
          <AttendanceTableHeaderData>이모지</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>이름 / 역할</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>1주차</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>2주차</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>3주차</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>4주차</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>5주차</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>6주차</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>7주차</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>8주차</AttendanceTableHeaderData>
          <AttendanceTableHeaderData>보증금</AttendanceTableHeaderData>
        </AttendanceTableRow>
        {/* courseAttendance (user)=> 반복문 돌리기 */}
        <AttendanceTableRow>
          <AttendanceTableData>{user.emoji}</AttendanceTableData>
          <AttendanceTableData>
            <UserName>{user.name}</UserName>
            <UserRole>{isMember(user, course)}</UserRole>
            <UserProfile href={`/userpage/${user.id}`}>프로필 보러가기 &gt;</UserProfile>
          </AttendanceTableData>
          {/* user.attendance (item, i)=> 반복문 돌리기 */}
          {attendances[0].attendance.map((item, i) => {
            return (
              <AttendanceTableData key={'attendance' + i}>
                {attendance_constant[item]}
              </AttendanceTableData>
            );
          })}
          <AttendanceTableData>{/*대충 보증금 계산 로직*/}-2000</AttendanceTableData>
        </AttendanceTableRow>
      </AttendanceTable>
    </AttendanceContainer>
  );
};
