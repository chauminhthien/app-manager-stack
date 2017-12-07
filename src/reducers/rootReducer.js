import { combineReducers } from 'redux';

import page from './pageReducer';
import stack from './stackReducer';

export default combineReducers({
  page,
  stack
});