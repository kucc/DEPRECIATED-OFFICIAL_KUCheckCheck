import JoinForm from './JoinForm';
import { StyledCol, StyledRow, Wrapper } from './style';

export const JoinPage = () => {
  return (
    <StyledRow>
      <StyledCol>
        <Wrapper>
          <JoinForm />
        </Wrapper>
      </StyledCol>
    </StyledRow>
  );
};
