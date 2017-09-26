
import {DO_LOGIN, DO_LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/login'

const initialState = {
    isLoading: false,
    hasError: false,
    errorMessage: null,
    user: JSON.parse( localStorage.getItem('user') )
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DO_LOGIN:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                errorMessage: null,
                user: null
            }
        case DO_LOGOUT:
            localStorage.setItem('user', null)
            return {
                ...state,
                user: null
            }
        case LOGIN_SUCCESS:
            if (action.payload.uid) {// Do not save if it is not a valid user
                localStorage.setItem('user', JSON.stringify(action.payload))
            }

            return {
                ...state,
                isLoading: false,
                hasError: false,
                errorMessage: null,
                user: action.payload
            }
        case LOGIN_FAILURE:
            let errorMessage = 'Erro desconhecido'
            switch ( action.payload.code ) {
                case 'auth/user-not-found':
                    errorMessage = 'User not found.'
                    break
                case 'auth/invalid-email':
                    errorMessage = 'Invalid e-mail.'
                    break
                case 'auth/wrong-password':
                    errorMessage = 'Wrong user or password.'
                    break
            }

            return {
                ...state,
                isLoading: false,
                hasError: true,
                errorMessage: errorMessage,
                user: null
            }
        default:
            return state
    }
}