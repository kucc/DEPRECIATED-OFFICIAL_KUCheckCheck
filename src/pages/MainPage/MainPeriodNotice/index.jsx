import React, { useEffect, useState } from 'react';

import { Tooltip } from 'antd';
import { useMediaQuery } from 'react-responsive';

import { firestoreService } from '@/firebase';

import {
  StyledPeriod,
  StyledPeriodContainer,
  StyledPeriodTitle,
} from './style';

const MainPeriodNotice = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const toolTipOverlayStyle = {
    maxWidth: '400px',
    whiteSpace: 'pre-line',
    fontSize: isMobile ? '11px' : '13px',
  };
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

      // 수강 신청 기간
      if (
        enrollmentTerm.start.toDate() < today &&
        today < enrollmentTerm.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>수강 신청 기간</StyledPeriodTitle>
            &nbsp;&nbsp;
            {enrollmentTerm.start.toDate().toLocaleDateString('ko-KR')} ~&nbsp;
            {enrollmentTerm.end.toDate().toLocaleDateString('ko-KR')}
          </Tooltip>,
        );
      }
      // 세션 등록 기간
      else if (
        registerTerm.start.toDate() < today &&
        today < registerTerm.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>세션 등록 기간</StyledPeriodTitle>
            &nbsp;&nbsp;
            {registerTerm.start.toDate().toLocaleDateString('ko-KR')} ~&nbsp;
            {registerTerm.end.toDate().toLocaleDateString('ko-KR')}
          </Tooltip>,
        );
      }
      // 활동 기간
      else if (
        activeTerm.start.toDate() < today &&
        today < activeTerm.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>활동 기간</StyledPeriodTitle>
            &nbsp;&nbsp;
            {activeTerm.start.toDate().toLocaleDateString('ko-KR')} ~&nbsp;
            {activeTerm.end.toDate().toLocaleDateString('ko-KR')}
          </Tooltip>,
        );
      } else {
        setText(
          <>
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
      <StyledPeriod className='in-shadow-weak border-radius-all'>
        📌&nbsp;&nbsp;{text}
      </StyledPeriod>
    </StyledPeriodContainer>
  );
};

export default MainPeriodNotice;
