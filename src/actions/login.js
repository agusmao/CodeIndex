/**
 * Created by agusmao on 03/07/17.
 */
import { login } from '../services/userService.js'
import {push} from 'react-router-redux'

/*
 * Actions aliases
 */

export const DO_LOGIN      = 'login/DO_LOGIN'
export const DO_LOGOUT     = 'login/DO_LOGOUT'
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'login/LOGIN_FAILURE'

/*
 * Actions
 */

export const doLogin = (email, password, token) => {
    return dispatch => {
        dispatch(initLoginRequest())

        login(email, password).subscribe(
            user => { // On next
                dispatch(successLoginRequest(user))
                dispatch(push('/home'))
            },
            error => { // On error
                dispatch(failLoginRequest(error))
            },
            { // On complete

            }
        )
    }
}

export const doLogout = () => {
    return dispatch => {
        dispatch(logoutRequest())
        dispatch(push('/login'))
    }
}

/*
 * State changes
 */

function initLoginRequest() {
    return {
        type: DO_LOGIN
    }
}

function logoutRequest() {
    return {
        type: DO_LOGOUT
    }
}

function successLoginRequest(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

function failLoginRequest(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}