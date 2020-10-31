import customCreateContext from '../utils/customCreateContext';
import reducer, { initialState } from '../reducers/authReducer';
import actions from '../actions/authAction';

const AuthContextInstance = customCreateContext({
  reducer,
  actions,
  initialState
})


export default AuthContextInstance;
