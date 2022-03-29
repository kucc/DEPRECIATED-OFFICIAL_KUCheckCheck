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

      const weekData = await firestoreService
        .collection('common')
        .doc('weekInfo')
        .get();

      const {
        firstWeek,
        secondWeek,
        thirdWeek,
        fourthWeek,
        fifthWeek,
        sixthWeek,
        seventhWeek,
        eighthWeek,
      } = weekData.data();

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
      // 1주차
      else if (
        firstWeek.start.toDate() < today &&
        today < firstWeek.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>오늘은?</StyledPeriodTitle>
            &nbsp;1주차입니다! 항상 화이팅하세요 :)
          </Tooltip>,
        );
      }
      // 2주차
      else if (
        secondWeek.start.toDate() < today &&
        today < secondWeek.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>오늘은?</StyledPeriodTitle>
            &nbsp;2주차입니다! 항상 화이팅하세요 :)
          </Tooltip>,
        );
      }
      // 3주차
      else if (
        thirdWeek.start.toDate() < today &&
        today < thirdWeek.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>오늘은?</StyledPeriodTitle>
            &nbsp;3주차입니다! 항상 화이팅하세요 :)
          </Tooltip>,
        );
      }
      // 4주차
      else if (
        fourthWeek.start.toDate() < today &&
        today < fourthWeek.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>오늘은?</StyledPeriodTitle>
            &nbsp;4주차입니다! 항상 화이팅하세요 :)
          </Tooltip>,
        );
      }
      // 5주차
      else if (
        fifthWeek.start.toDate() < today &&
        today < fifthWeek.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>오늘은?</StyledPeriodTitle>
            &nbsp;5주차입니다! 항상 화이팅하세요 :)
          </Tooltip>,
        );
      }
      // 6주차
      else if (
        sixthWeek.start.toDate() < today &&
        today < sixthWeek.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>오늘은?</StyledPeriodTitle>
            &nbsp;6주차입니다! 항상 화이팅하세요 :)
          </Tooltip>,
        );
      }
      // 7주치
      else if (
        seventhWeek.start.toDate() < today &&
        today < seventhWeek.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>오늘은?</StyledPeriodTitle>
            &nbsp;7주차입니다! 항상 화이팅하세요 :)
          </Tooltip>,
        );
      }
      // 8주차
      else if (
        eighthWeek.start.toDate() < today &&
        today < eighthWeek.end.toDate()
      ) {
        setText(
          <Tooltip title={alertText} overlayStyle={toolTipOverlayStyle}>
            <StyledPeriodTitle>오늘은?</StyledPeriodTitle>
            &nbsp;8주차입니다! 항상 화이팅하세요 :)
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
            <StyledPeriodTitle>휴식 & 시험 기간</StyledPeriodTitle>
            &nbsp;&nbsp; 시험 기간으로 잠시 쉬어가는 기간입니다.
          </Tooltip>,
        );
      } else {
        setText(
          <StyledPeriodTitle>
            지금은 휴식 기간입니다. 다음 학기에 봬요!
          </StyledPeriodTitle>,
        );
      }
    }
    fetchTermData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
