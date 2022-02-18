import {
  signInActionTypes
} from "../actionTypes/actionTypes";

const initialState = {

  signInLoading: false,
  signInSuccess: null,
  signInError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case signInActionTypes.REQUEST_ACTION:
      return {
        ...state,
        signInLoading: true,
        signInSuccess: null,
        signInError: null
      }
    case signInActionTypes.SUCCESS_ACTION:

      const result = action.value.result;

      return {
        ...state,
        signInLoading: false,
        signInSuccess: action.value,
        signInError: null
      }
    case signInActionTypes.FAILED_ACTION:
      return {
        ...state,
        signInLoading: false,
        signInSuccess: null,
        signInError: action.value
      }

    default:
      return state
  }
}
