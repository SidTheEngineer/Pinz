import { combineReducers } from 'redux';

const root = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  root
});

export default rootReducer;
