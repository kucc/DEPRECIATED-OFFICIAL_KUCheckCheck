import React from 'react';

import NavBar from '@components/NavBar';
import TimeTable from '@components/TimeTable';

import {
  StyledBackground,
  StyledTimeTableBackground,
  StyledTimeTableBox,
  StyledTimeTableText,
} from './style';

function TimeTablePage() {
  return (
    <StyledBackground>
      <NavBar />
      <StyledTimeTableBox>
        <StyledTimeTableText>시간표</StyledTimeTableText>
        <StyledTimeTableBackground className="border-radius-all">
          <TimeTable editable={false} />
        </StyledTimeTableBackground>
      </StyledTimeTableBox>
    </StyledBackground>
  );
}
export default TimeTablePage;
