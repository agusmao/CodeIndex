
import {DO_FETCH_SCRIPTS, FETCH_SCRIPTS_FAILURE, FETCH_SCRIPTS_SUCCESS} from '../actions/scripts'

const initialState = {
    isLoading: false,
    hasError: false,
    errorMessage: null,
    scripts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DO_FETCH_SCRIPTS:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                errorMessage: null,
                scripts: []
            }
        case FETCH_SCRIPTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                errorMessage: action.payload,
                scripts: []
            }
        case FETCH_SCRIPTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                errorMessage: null,
                scripts: action.payload
            }
        default:
            return state
    }
}