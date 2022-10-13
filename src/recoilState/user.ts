import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false,
});

export const userState = atom<User | undefined>({
  key: 'userState',
  default: undefined,
});
