import { useEffect, useState } from 'react';

import { courseState } from '@recoilState/course';
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';

import { getCommonInfoRequest } from '@redux/actions/renewal_common_action';
import { getMainCourseRequest } from '@redux/actions/renewal_course_action';

import { MainCourseTab } from './MainCourseTab';
import { MainSearch } from './MainSearch';
import { MainTopContainer } from './MainTopContainer';
import {
  MainBottomContainer,
  StyledMainCourse,
  StyledUserContainer,
} from './style';

export const RenewalMainPage = () => {
  const [commonInfo, setCommonInfo] = useRecoilState(commonInfoState);
  const setCourse = useRecoilState(courseState);

  // current Semester : 현재 무슨 학기인지 => string
  const [currentSemester, setCurrentSemester] = useState('');

  // 학기 정보 불러오기
  useEffect(() => {
    getCommonInfoRequest().then(v => {
      setCommonInfo(v);
    });
  }, []);

  // // 학기에 맞춰 코스 불러오기
  useEffect(() => {
    if (commonInfo) {
      handleCurrentSemester(commonInfo.currentSemester);
    }
  }, [commonInfo]);

  const handleCurrentSemester = semester => {
    setCurrentSemester(semester);

    getMainCourseRequest(semester).then(v => {
      setCourse(v);
    });
  };

  return (
    <>
      <MainTopContainer />
      <MainBottomContainer>
        <StyledMainCourse>
          <MainSearch
            currentSemester={currentSemester}
            handleCurrentSemester={handleCurrentSemester}
          />
          <MainCourseTab />
        </StyledMainCourse>
        <StyledUserContainer>
          <div>유저</div>
          <div>시간표</div>
        </StyledUserContainer>
      </MainBottomContainer>
    </>
  );
};

RenewalMainPage.propTypes = {
  commonInfoStatus: PropTypes.string,
  commonInfoData: PropTypes.object,
};
