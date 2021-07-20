import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAIL } from './constant';

export const login = (payload) => async (dispatch) => {
  dispatch({ type: LOGIN_INIT });
  const { email, password } = payload;
  setTimeout(function () {
    if (email === 'hiren@gmail.com' && password === '123456') {
      dispatch({ type: LOGIN_SUCCESS });
    } else {
      dispatch({ type: LOGIN_FAIL });
    }
  }, 1000);
};
