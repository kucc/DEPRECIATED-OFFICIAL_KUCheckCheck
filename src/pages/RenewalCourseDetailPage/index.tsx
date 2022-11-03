import { RED } from '@utility/COLORS';
import { } from '@utility/COMMON_STYLE';
import { stringify } from 'querystring';

import {
  CourseDescription,
  CourseDetailComponent,
  ComponentTitle,
  CourseDetailCard,
  CourseDetailCardTitle,
  CourseDetailContainer,
  CourseDetailTable,
  CourseDetailTableHeaderData,
  CourseDetailTableRow,
  CourseDetailTableData,
  StyledCaseSlash,
  StyledCourseTop,
  StyledCourseTitle,
  StyledCourseLanguageImage,
  StyledUserInfoContainer,
  StyledUserEmoji,
  StyledUserContainer,
  StyledName,
  StyledComment,
  StyledLink,
  LongTableHeaderData,
  CourseStack,
} from './style';

export const RenewalCourseDetailPage = () => {
  // const courseId = props.match.params.id;
  //코스
  const course: InfoType = {
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

  type InfoType = {
    [index: string]: any
  }


  const infoConstant: InfoType =
    { introduction: "활동 소개", goal: "활동 목표", max_number: "활동 인원", progress_date: "진행요일", place: "진행 장소 및 방법", notice: "유의 사항" };
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
  const attendance = {
    member_id: 23,
    course_id: 13,
    is_master: 1,
    attendance: [0, 0, 0, 1, 0, 0, 2, 0, 3],
  };
  return (
    <CourseDetailContainer>
      <CourseDetailComponent width="35%">
        <ComponentTitle>팀장</ComponentTitle>
        <CourseDetailCard>
          <StyledUserInfoContainer>
            <StyledUserEmoji>{user.emoji}</StyledUserEmoji>
            <StyledUserContainer>
              <StyledName>
                {user.name} <span>님</span>
              </StyledName>
              <StyledComment>{user.comment}</StyledComment>
            </StyledUserContainer>
            <StyledLink>&#8594;</StyledLink>
          </StyledUserInfoContainer>
          <a href={`/profile/${user.id}`}></a>
        </CourseDetailCard>
        <ComponentTitle>사용 언어 및 기술 스택</ComponentTitle>
        <CourseDetailCard>
          <CourseDetailTable>
            <tbody>
              <CourseDetailTableRow>
                <LongTableHeaderData>주요 기술 스택</LongTableHeaderData>
                <CourseDetailTableData>
                  {course.language.map((item: string, i: number) => {
                    return <CourseStack key={'language' + i}>- {item}</CourseStack>;
                  })}
                </CourseDetailTableData>
              </CourseDetailTableRow>
              <CourseDetailTableRow>
                <LongTableHeaderData>세부 기술 스택</LongTableHeaderData>
                <CourseDetailTableData>
                  {course.detail_stack.map((item: string, i: number) => {
                    return <CourseStack key={'detail_stack' + i}>- {item}</CourseStack>;
                  })}
                </CourseDetailTableData>
              </CourseDetailTableRow>
            </tbody>
          </CourseDetailTable>
        </CourseDetailCard>
      </CourseDetailComponent>
      <CourseDetailComponent width="60%">
        <ComponentTitle>세션 소개</ComponentTitle>
        <CourseDetailCard>
          <CourseDetailCardTitle>
            <StyledCourseTop>
              <StyledCourseTitle isEllipsis={course.title.length > 14}>
                {course.title}
              </StyledCourseTitle>
              {/* {course.language.slice(0, 3).map((res: any, index: number) => {
                return (
                  <StyledCourseLanguageImage
                    key={index}
                    src={`/img/icon/${res}.svg`}
                    alt='언어 이미지'
                  />
                );
              })} */}
            </StyledCourseTop>
            <CourseDescription>
              난이도:&nbsp; <span className='point'>{course.difficulty}</span>
              <StyledCaseSlash>/</StyledCaseSlash>
              투자시간:&nbsp; <span className='point'>{course.require_time}학점</span>
            </CourseDescription>
          </CourseDetailCardTitle>
          <CourseDetailTable>
            <tbody>
              {Object.keys(infoConstant).map((item: string) => {
                return (
                  <CourseDetailTableRow key={item}>
                    <CourseDetailTableHeaderData>{infoConstant[item]}</CourseDetailTableHeaderData>
                    <CourseDetailTableData>{course[item]}</CourseDetailTableData>
                  </CourseDetailTableRow>
                )
              })}
            </tbody>
          </CourseDetailTable>
        </CourseDetailCard>
        <ComponentTitle>커리큘럼</ComponentTitle>
        <CourseDetailCard>
          <CourseDetailTable>
            <tbody>
              {course.curriculum.map((item: string, i: number) => {
                return (
                  <CourseDetailTableRow key={'curriculum' + i}>
                    <CourseDetailTableHeaderData>
                      {i + 1}주차
                    </CourseDetailTableHeaderData>
                    <CourseDetailTableData>{item}</CourseDetailTableData>
                  </CourseDetailTableRow>
                );
              })}
            </tbody>
          </CourseDetailTable>
        </CourseDetailCard>
      </CourseDetailComponent>
    </CourseDetailContainer>
  );
};

// RenewalCourseDetailPage.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   }),
// };
