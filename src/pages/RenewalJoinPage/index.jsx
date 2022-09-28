import { useHistory } from 'react-router-dom';

import { AuthDescription } from '@components';
import {
  StyledAuthContainer,
  StyledAuthMainImg,
  StyledCenterContainer,
} from '@pages/RenewalLoginPage/style';

import { RENEWAL_PATH } from '@utility/COMMON_FUNCTION';

import JoinForm from './JoinForm';

export const RenewalJoinPage = () => {
  const history = useHistory();

  return (
    <StyledCenterContainer>
      <StyledAuthContainer>
        <AuthDescription />
        <JoinForm />
        <StyledAuthMainImg
          alt='KUCC'
          onClick={() => history.push(RENEWAL_PATH.main)}
        />
      </StyledAuthContainer>
    </StyledCenterContainer>
  );
};
