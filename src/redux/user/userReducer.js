import * as types from "./userType";
const initiaState = {
  currentUser: null,
  userError: [],
  resetPasswordSuccess: false
  // signInSuccess: false,
  // signUpSuccess: false,
  // signUpError: [],
  // resetPassowrdSuccess: false,
  // resetPassowrdError: [],
 }
 
 export const userReducer = (state= initiaState,action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESSFUL:
      return {
        ...state,
        currentUser: action.payload,
        userError: []
      }
 
    case types.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...initiaState
      }
   //  case RESET_USER_STATE:
   //  case SIGN_OUT_USER_SUCCESS:
   //    return {
   //      ...state,
   //      ...initiaState
   //    }
    case types.USER_ERROR:
      return {
        ...state,
        userError: action.payload
      }
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload
      }
    default:
      return state
    }
    
  }