export const RenewalAttendancePage = () => {
  const attendance_constant = { 0: "출석", 1: "결석", 2: "지각", 3: "-" }
  const user = { id: "eFEMHeraiZSJKWs1bESwBkmwkEE2", emoji: "👨‍🍳", name: "김채린" }
  const course = {
    courseLeader: { id: "eFEMHeraiZSJKWs1bESwBkmwkEE2" },
    courseAttendance: [
      {
        attendance: [0, 1, 2, 0, 0, 0, 0, 0],
        id: "eFEMHeraiZSJKWs1bESwBkmwkEE2"
      },
      {
        attendance: [3, 3, 3, 3, 3, 3, 3, 3],
        id: "hn7xbecSw2YcMZIGmwsE2qHBcIN2"
      }
    ]
  }
  return (
    <div>
      <div className='top'>
        <h2>출결관리</h2>
        {isMember(user, course) === "팀장" ? <button>수정하기</button> : null}
        <select name="course" id="course-select">
          <option value="">코스 선택</option>
        </select>
      </div>
      <table>
        <tr>
          <th>이모지</th>
          <th>이름 / 역할</th>
          <th>1주차</th>
          <th>2주차</th>
          <th>3주차</th>
          <th>4주차</th>
          <th>5주차</th>
          <th>6주차</th>
          <th>7주차</th>
          <th>8주차</th>
          <th>보증금</th>
        </tr>
        {/* courseAttendance (user)=> 반복문 돌리기 */}
        <tr>
          <th>{user.emoji}</th>
          <th>
            <div>{user.name}</div>
            <div>{isMember(user, course)}</div>
            <a href={`/userpage/${user.id}`}>프로필 보러가기  &gt;</a>
          </th>
          {/* user.attendance (item, i)=> 반복문 돌리기 */}
          {course.courseAttendance[0].attendance.map((item, i) => {
            console.log(attendance_constant[item])
            return <th key={"attendance" + i}>{attendance_constant[item]}</th>
          })}
          <th>{/*대충 보증금 계산*/}-2000</th>
        </tr>
      </table>
    </div>
  );
};
