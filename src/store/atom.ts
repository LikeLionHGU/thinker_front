import { atom } from 'recoil';

export const isAuto = atom({
  key: 'isAuto',
  default: false,
});

export const profileSelectedIndex = atom({
  key: 'profileSelectedIndex',
  default: 0,
});

export const scriptAtom = atom({
  key: 'script',
  default: '',
});

export const searchResultAtom = atom({
  key: 'searchResult',
  default: [],
});
