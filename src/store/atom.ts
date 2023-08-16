import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const isBrowser = typeof window !== 'undefined';

const { persistAtom } = recoilPersist({
  key: 'localStorage', //원하는 key 값 입력
  storage: isBrowser ? localStorage : null,
});

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

export const isLoginAtom = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const loginIdAtom = atom({
  key: 'loginId',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
