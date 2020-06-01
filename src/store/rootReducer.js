import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../services/history';
import auth from '../store/auth';
import user from '../store/user';

// import { reducer as auth } from 'store/auth/reducer';

const appReducer = combineReducers({
  auth,
  user,
  router: connectRouter(history),
});

const rootReducer = (state, action) => {
  // if (action.type === RESET_STORE) {
  //   state = undefined;
  // }

  return appReducer(state, action);
};

export default  rootReducer;