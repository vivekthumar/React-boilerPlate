import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAIL } from './constant';

const initialState = {
  loader: false,
};

export function auth(state = initialState, { type }) {
  switch (type) {
    case LOGIN_INIT:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false };
    case LOGIN_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
}
