/**
 * @name redux/index.js
 * @description root reducer
 * @version 0.0.0
 */

import { app } from './app';
import { auth } from './auth/reducer';

const { combineReducers } = require('redux');

const reducer = combineReducers({
  app,
  auth,
});

export default reducer;
