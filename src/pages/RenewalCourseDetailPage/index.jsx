import React from 'react';

import PropTypes from 'prop-types';

import { StyledCommonTitle } from '@utility/COMMON_STYLE';

export const RenewalCourseDetailPage = props => {
  const courseId = props.match.params.id;
  //코스
  const course = {
    id: 13,
    member_id: 23,
    semester_id: 3,
    type: 3,
    difficulty: "medium",
    require_time: 2,
    title: "C스터디",
    introduction: "소개",
    goal: "목표",
    progress_date: "매주 목 10시부터 1시간 진행예정",
    max_number: 8,
    place: "동방 or zoom",
    notice: "복습 철저히 부탁드립니다 .",
    language: ["C", "Database", "Html"],
    detail_stack: ["Typescript", "Express", "NextJS", "AWS"],
    curriculum: [
      "1주차에는 이걸할거에요", "2주차에는 이걸할거에요", "3주차에는 이걸할거에요", "8주차에는 이걸할거에요"
    ],
  }

  //유저
  const user = {
    id: 23,
    email: "heehee4898@gmail.com",
    name: "임희선",
    role: "member",
    emoji: "👨‍🍳",
    comment: "ㅎㅇ",
    detail_comment: "ㅎㅇ",
    github_id: "https://github.com/limheesun4898",
    instagram_id: ""
  }

  //출석
  const attendance = {
    member_id: 23,
    course_id: 13,
    is_master: 1,
    attendance: [0, 0, 0, 1, 0, 0, 2, 0, 3]
  }
  console.log(courseId);
  return (
    <div>
      <div>
        <StyledCommonTitle>세션 소개</StyledCommonTitle>
        <div className='card'>
          <div className='cardTitle'>
            <h1>{course.title}</h1>
            <div>난이도: {course.difficulty} / 투자시간: {course.require_time}학점</div>
          </div>
          <table>
            <tbody>
              <tr>
                <th>활동 소개</th>
                <th>{course.introduction}</th>
              </tr>
              <tr>
                <th>활동 목표</th>
                <th>{course.goal}</th>
              </tr>
              <tr>
                <th>활동 인원</th>
                <th>{course.max_number}</th>
              </tr>
              <tr>
                <th>진행요일</th>
                <th>{course.progress_date}</th>
              </tr>
              <tr>
                <th>진행 장소 및 방법</th>
                <th>{course.place}</th>
              </tr>
              <tr>
                <th>유의 사항</th>
                <th>{course.notice}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <StyledCommonTitle>커리큘럼</StyledCommonTitle>
        <div className='card'>
          <table>
            <tbody>
              {course.curriculum.map((item, i) => {
                return (
                  <tr key={'curriculum' + i}>
                    <th>
                      <b>{i + 1}주차</b>
                    </th>
                    <th>{item}</th>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <StyledCommonTitle>팀장</StyledCommonTitle>
        <div className='card'>
          <div className='emoji'>{user.emoji}</div>
          <div className='info'>
            <div className='name'>{user.name}님</div>
            <div className='comment'>{user.comment}</div>
          </div>
          <a href={`/profile/${user.id}`}>화살표</a>
        </div>
      </div>
      <div>
        <StyledCommonTitle>사용 언어 및 기술 스택</StyledCommonTitle>
        <div className='card'>
          <table>
            <tbody>
              <tr>
                <th>주요 기술 스택</th>
                <th>
                  {course.language.map((item, i)=>{return(
                    <div key={'language'+i}>- {item}</div>
                  )})}
                </th>
              </tr>
              <tr>
                <th>세부 기술 스택</th>
                <th>
                  {course.detail_stack.map((item, i)=>{return(
                    <div key={'detail_stack'+i}>- {item}</div>
                  )})}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

RenewalCourseDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
