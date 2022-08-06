import styled from 'styled-components';
import { TEXT_COLOR } from '@utility/COLORS';

export const StyledForm = styled.form`
  width: 100%;
  margin: 0 auto;

  a, button {
    display: block;
    margin: 0 auto;
  }

  .signupButton {
    color: ${TEXT_COLOR};
    font-size: 16px;
    width: 40px;
    margin-top: 24px;
    text-decoration: underline;
  }
`;
