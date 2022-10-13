import { useEffect, useState } from 'react';

import { courseState, userState } from '@recoilState';
import { useHistory, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { getMainCourseRequest } from '@redux/actions/renewal_course_action';
import { getProfileRequest } from '@redux/actions/renewal_member_action';

import { RenewalEmptyBox, RenewalMainCourse } from '@components';

import { getToken } from '@/api';
import { MEMBER_ROLE, RENEWAL_PATH } from '@utility/COMMON_FUNCTION';
import { StyledCourseTab, StyledTab, StyledTabText } from '@utility/COMMON_STYLE';

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
  const location = useLocation();
  const locationState = location.state as { selectedId: number };
  const selectUserId = locationState.selectedId;

  const history = useHistory();
  const [member] = useRecoilState(userState);
  const [course, setCourse] = useRecoilState(courseState);

  const [courseTab, setCourseTab] = useState('now');
  const [isMyProfile, setIsMyProfile] = useState(false);

  useEffect(() => {
    // 임의 코스 데이터
    getMainCourseRequest('21-2').then(v => {
      setCourse(v);
    });

    const token = getToken();

    if (!token && !selectUserId) {
      alert('로그인 후 이용 가능합니다.');

      history.push(RENEWAL_PATH.login);
    }

    if ((member && member?.id === selectUserId) || (member?.id && selectUserId === null)) {
      getProfileRequest(member.id).then(v => {
        if (v) {
          setIsMyProfile(true);
        }
      });
    }
  }, [history, member?.id, selectUserId]);

  if (member) {
    return (
      <>
        <StyledUserInfoContainer>
          <StyledUserEmoji>{member.emoji}</StyledUserEmoji>
          <StyledUserContainer>
            <StyledName>
              {member.name}
              {member.role === MEMBER_ROLE.MANAGER && <StyledUserRole>운영진</StyledUserRole>}
            </StyledName>
            <StyledComment>{member.comment}</StyledComment>
            <StyledSocialContainer>
              <StyledSocialBox>
                <img src={EmailIcon} />
                <StyledSocialLink href='mailto:ina20118@korea.ac.kr' target='_blank'>
                  {member.email}
                </StyledSocialLink>
              </StyledSocialBox>
              <StyledSocialBox>
                <img src={GithubIcon} />
                <StyledSocialLink href='https://github.com' target='_blank'>
                  {member.githubId}
                </StyledSocialLink>
              </StyledSocialBox>
              <StyledSocialBox>
                <img src={InstagramIcon} />
                <StyledSocialLink href='https://www.instagram.com/' target='_blank'>
                  {member.instagramId}
                </StyledSocialLink>
              </StyledSocialBox>
            </StyledSocialContainer>
          </StyledUserContainer>
          <StyledPcModifyButton>수정하기</StyledPcModifyButton>
        </StyledUserInfoContainer>
        <StyledUserDetailComment>{member.detailComment}</StyledUserDetailComment>
        {isMyProfile && <StyledMobileModifyButton>수정하기</StyledMobileModifyButton>}
        <StyledCourseContainer>
          <StyledCourseTab>
            <StyledTab onClick={() => setCourseTab('now')}>
              <StyledTabText active={courseTab === 'now'}>현재 활동</StyledTabText>
            </StyledTab>
            <StyledTab onClick={() => setCourseTab('past')}>
              <StyledTabText active={courseTab === 'past'}>지난 활동</StyledTabText>
            </StyledTab>
          </StyledCourseTab>
          {course.length === 0 && <RenewalEmptyBox />}
          {course.length > 0 &&
            // 현재 course 조회가 어떻게 날라오는지 알 수가 없음 (이후 type 정의할 필요 있음)
            course.map((res: any) => {
              return <RenewalMainCourse course={res} key={res.id} />;
            })}
        </StyledCourseContainer>
      </>
    );
  } else {
    return <div />;
  }
};
