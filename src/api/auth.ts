import axios from 'axios';

export const authSignup = ({ queryKey }: { queryKey: string[] }) => {
  const [, email, password, name, comment] = queryKey;

  return axios.post('/auth/signup', {
    email,
    password,
    name,
    comment,
  });
};
