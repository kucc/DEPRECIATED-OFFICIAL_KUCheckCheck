import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getMainCourseRequest } from '@redux/actions/renewal_course_action';

import { RenewalEmptyBox, RenewalMainCourse } from '@components';

import {
  StyledCourseTab,
  StyledTab,
  StyledTabText,
} from '@utility/COMMON_STYLE';

import EmailIcon from '../../svg/profile/email.svg';
import GithubIcon from '../../svg/profile/github.svg';
import InstagramIcon from '../../svg/profile/instagram.svg';
import {
  StyledComment,
  StyledCourseContainer,
  StyledMobileModifyButton,
  StyledName,
  StyledPcModifyButton,
  StyledSocialBox,
  StyledSocialContainer,
  StyledSocialLink,
  StyledUserContainer,
  StyledUserDetailComment,
  StyledUserEmoji,
  StyledUserInfoContainer,
  StyledUserRole,
} from './style';

export const RenewalProfilePage = () => {
  const [courseTab, setCourseTab] = useState('now');
  const dispatch = useDispatch();

  const mainCourseData = useSelector(state => state.course.mainCourse.data);

  // 임의 코스 데이터
  useEffect(() => {
    dispatch(getMainCourseRequest('21-2'));
  }, []);

  return (
    <>
      <StyledUserInfoContainer>
        <StyledUserEmoji>🧑‍🎤</StyledUserEmoji>
        <StyledUserContainer>
          <StyledName>
            임희선
            <StyledUserRole>운영진</StyledUserRole>
          </StyledName>
          <StyledComment>
            안녕하십니까 ~ 저는 정인아입니다요~! 여기는 한줄소개 칸이여유
          </StyledComment>
          <StyledSocialContainer>
            <StyledSocialBox>
              <img src={EmailIcon} />
              <StyledSocialLink
                href='mailto:ina20118@korea.ac.kr'
                target='_blank'>
                ina20118@korea.ac.kr
              </StyledSocialLink>
            </StyledSocialBox>
            <StyledSocialBox>
              <img src={GithubIcon} />
              <StyledSocialLink href='https://github.com' target='_blank'>
                https://github.com
              </StyledSocialLink>
            </StyledSocialBox>
            <StyledSocialBox>
              <img src={InstagramIcon} />
              <StyledSocialLink
                href='https://www.instagram.com/닉네임'
                target='_blank'>
                @instagram
              </StyledSocialLink>
            </StyledSocialBox>
          </StyledSocialContainer>
        </StyledUserContainer>
        <StyledPcModifyButton>수정하기</StyledPcModifyButton>
      </StyledUserInfoContainer>
      <StyledUserDetailComment>
        안녕하십니까 ~ 저는 고려대학교 디자인조형학부 20학번 정인아입니다! /n
        지금 디자인하고 있는데 만족스럽습니다. \n 열심히 만들었으니 많이
        사용해주세요 히히
      </StyledUserDetailComment>
      <StyledMobileModifyButton>수정하기</StyledMobileModifyButton>
      <StyledCourseContainer>
        <StyledCourseTab>
          <StyledTab onClick={() => setCourseTab('now')}>
            <StyledTabText active={courseTab === 'now'}>
              현재 활동
            </StyledTabText>
          </StyledTab>
          <StyledTab onClick={() => setCourseTab('past')}>
            <StyledTabText active={courseTab === 'past'}>
              지난 활동
            </StyledTabText>
          </StyledTab>
        </StyledCourseTab>
        {mainCourseData.length === 0 && <RenewalEmptyBox />}
        {mainCourseData.length > 0 &&
          mainCourseData.map(res => {
            return <RenewalMainCourse course={res} key={res.id} />;
          })}
      </StyledCourseContainer>
    </>
  );
};
