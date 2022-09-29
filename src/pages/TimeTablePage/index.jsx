import { TimeTable } from '@components';

import {
  StyledBackground,
  StyledTimeTableBackground,
  StyledTimeTableBox,
  StyledTimeTableText,
} from './style';

export const TimeTablePage = () => {
  return (
    <StyledBackground>
      <StyledTimeTableBox>
        <StyledTimeTableText>동방 사용 시간표</StyledTimeTableText>
        <StyledTimeTableBackground className='border-radius-all'>
          <TimeTable editable={false} />
        </StyledTimeTableBackground>
      </StyledTimeTableBox>
    </StyledBackground>
  );
};
