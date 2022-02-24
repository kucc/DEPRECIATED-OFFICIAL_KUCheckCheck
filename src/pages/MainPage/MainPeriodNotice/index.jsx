import React, { useEffect, useState } from 'react';

import { Tooltip } from 'antd';

import { firestoreService } from '@/firebase';

import {
  StyledPeriod,
  StyledPeriodContainer,
  StyledPeriodTitle,
} from './style';

const MainPeriodNotice = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    const today = new Date();
    async function fetchTermData() {
      const commonInfoData = await firestoreService
        .collection('common')
        .doc('commonInfo')
        .get();

      const { registerTerm, enrollmentTerm, activeTerm } =
        commonInfoData.data();

      console.log(
        activeTerm.start.toDate() < today && today < activeTerm.end.toDate(),
      );

      const alertText = `세션 등록 기간 : ${registerTerm.start
        .toDate()
        .toLocaleDateString('ko-KR')} ~ ${registerTerm.end
        .toDate()
        .toLocaleDateString('ko-KR')}\n수강 신청 기간 : ${enrollmentTerm.start
        .toDate()
        .toLocaleDateString('ko-KR')} ~ ${enrollmentTerm.end
        .toDate()
        .toLocaleDateString('ko-KR')}
      활동 기간 : ${activeTerm.start
        .toDate()
        .toLocaleDateString('ko-KR')} ~ ${activeTerm.end
        .toDate()
        .toLocaleDateString('ko-KR')}
      `;

      // 세션 등록 기간
      if (
        registerTerm.start.toDate() < today &&
        today < registerTerm.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={{ maxWidth: '300px' }}>
            📌&nbsp;&nbsp;
            <StyledPeriodTitle>세션 등록 기간</StyledPeriodTitle>
            &nbsp;&nbsp;
            {registerTerm.start.toDate().toLocaleDateString('ko-KR')} ~&nbsp;
            {registerTerm.end.toDate().toLocaleDateString('ko-KR')}
          </Tooltip>,
        );
        // 수강 신청 기간
      } else if (
        enrollmentTerm.start.toDate() < today &&
        today < enrollmentTerm.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={{ maxWidth: '300px' }}>
            📌&nbsp;&nbsp;
            <StyledPeriodTitle>수강 신청 기간</StyledPeriodTitle>
            &nbsp;&nbsp;
            {enrollmentTerm.start.toDate().toLocaleDateString('ko-KR')} ~&nbsp;
            {enrollmentTerm.end.toDate().toLocaleDateString('ko-KR')}
          </Tooltip>,
        );
        // 활동 기간
      } else if (
        activeTerm.start.toDate() < today &&
        today < activeTerm.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={{ maxWidth: '300px' }}>
            📌&nbsp;&nbsp;
            <StyledPeriodTitle>활동 기간</StyledPeriodTitle>
            &nbsp;&nbsp;
            {activeTerm.start.toDate().toLocaleDateString('ko-KR')} ~&nbsp;
            {activeTerm.end.toDate().toLocaleDateString('ko-KR')}
          </Tooltip>,
        );
      } else {
        setText(
          <>
            📌&nbsp;&nbsp;
            <StyledPeriodTitle>
              지금은 휴식 기간입니다. 다음 학기에 봬요!
            </StyledPeriodTitle>
          </>,
        );
      }
    }
    fetchTermData();
  }, []);

  return (
    <StyledPeriodContainer>
      <StyledPeriod className='in-shadow-middle border-radius-all'>
        {text}
      </StyledPeriod>
    </StyledPeriodContainer>
  );
};

export default MainPeriodNotice;
