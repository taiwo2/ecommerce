import * as types from "./userType";

const initialState = {
  currentUser: null,
  signInSuccess: false,
  signUpSuccess: false,
  errors: [],
  resetPasswordSuccess: false,
  ressetpasswordError: []
}

const userReducer = (state= initialState,action) => {
  switch (action.type) {
    case types.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload
      }
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.payload
      }
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassowrSuccess: action.payload
      }
    case types.SIGN_IN_ERROR:
      return{
        ...state,
        errors: action.payload
      }
    case types.RESET_PASSWORD_ERROR:
      return{
        ...state,
        ressetpasswordError: action.payload
      }
    case types.RESET_AUTH:
      return{
        ...state,
        signInSuccess: false,
        signUpSuccess: false,
        errors: [],
        resetPasswordSuccess: false,
        ressetpasswordError: []
      }
    default:
      return state;
  }
}

export default userReducer