import React, { useEffect, useState } from 'react';

import { NavBar } from '@components';

import { firestoreService } from '@/firebase';

import {
  StyledBackground,
  StyledRulesBox,
  StyledRulesCollapse,
  StyledRulesPanel,
  StyledRulesTitle,
} from '../style';

function NoticeContainer() {
  const [Notices, setNotices] = useState([]);
  useEffect(() => {
    async function fetchNoticesData() {
      const noticesData = await firestoreService.collection('notices').get();
      // 임시 배열에 Data를 push
      let noticesArray = [];
      noticesData.forEach(doc => {
        noticesArray.push(doc.data());
      });
      setNotices(noticesArray);
    }
    fetchNoticesData();
  }, []);

  return (
    <StyledBackground>
      <NavBar />
      <StyledRulesBox>
        <StyledRulesTitle>공지사항</StyledRulesTitle>
        <StyledRulesCollapse
          defaultActiveKey={['0']}
          expandIconPosition='right'>
          {Notices &&
            Notices.map((item, key) => (
              <StyledRulesPanel header={item.title} key={key}>
                <p>{item.content.replaceAll('\\n', '\n')}</p>
              </StyledRulesPanel>
            ))}
        </StyledRulesCollapse>
      </StyledRulesBox>
    </StyledBackground>
  );
}

export default NoticeContainer;
