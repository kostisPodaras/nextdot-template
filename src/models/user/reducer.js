import { signIn, signOut } from './actions';

const initialState = {
  authenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case signIn.type:
      return {
        ...state,
        authenticated: true,
      };
    case signOut.type:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
