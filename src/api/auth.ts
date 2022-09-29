import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

export const authSignup = ({
  queryKey,
}: QueryFunctionContext<[string, string, string, string, string]>) => {
  const [, email, password, name, comment] = queryKey;

  return axios.post('/auth/signup', {
    email,
    password,
    name,
    comment,
  });
};
