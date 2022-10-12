import { atom } from 'recoil';

// TODO: course 타입 정확하게 넣어주기 (아직 백엔드에서 타입이 정확하게 안 나온듯)
export const hamburgerState = atom<boolean | undefined>({
  key: 'hamburgerState',
  default: undefined,
});
