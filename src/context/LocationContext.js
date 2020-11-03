import customCreateContext from '../utils/customCreateContext';
import reducer, { initialState } from '../reducers/locationReducer';
import actions from '../actions/locationAction';

const AuthContextInstance = customCreateContext({
  reducer,
  actions,
  initialState
})


export default AuthContextInstance;
