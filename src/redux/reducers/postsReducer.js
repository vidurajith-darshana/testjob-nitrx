import {postsActionTypes} from "../actionTypes/actionTypes";

const initialState = {

    postsLoading: false,
    postsSuccess: null,
    postsError: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case postsActionTypes.REQUEST_ACTION:
            return {
                ...state,
                postsLoading: true,
                postsSuccess: null,
                postsError: null
            }
        case postsActionTypes.SUCCESS_ACTION:
            return {
                ...state,
                postsLoading: false,
                postsSuccess: action.value.result,
                postsError: null
            }
        case postsActionTypes.FAILED_ACTION:
            return {
                ...state,
                postsLoading: false,
                postsSuccess: null,
                postsError: action.value.result
            }

        default:
            return state
    }
}
