import styled from 'styled-components';
import { BLACK } from '@utility/COLORS';

export const StyledForm = styled.form`
  width: 100%;
  margin: 0 auto;

  a, button {
    display: block;
    margin: 0 auto;
  }

  .signupButton {
    color: ${BLACK};
    font-size: 16px;
    width: 40px;
    margin-top: 24px;
    text-decoration: underline;
  }
`;
