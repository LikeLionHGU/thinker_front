import { atom } from 'recoil';

export const isAuto = atom({
  key: 'isAuto',
  default: false,
});

export const profileSelectedIndex = atom({
  key: 'profileSelectedIndex',
  default: 0,
});
