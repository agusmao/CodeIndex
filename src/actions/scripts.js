/**
 * Created by agusmao on 03/07/17.
 */
import { loadScripts } from '../services/scriptService'
import {push} from 'react-router-redux'

/*
 * Actions aliases
 */

export const DO_FETCH_SCRIPTS      = 'scripts/DO_FETCH_SCRIPTS'
export const FETCH_SCRIPTS_SUCCESS = 'scripts/FETCH_SCRIPTS_SUCCESS'
export const FETCH_SCRIPTS_FAILURE = 'scripts/FETCH_SCRIPTS_FAILURE'

/*
 * Actions
 */

export const doFecthScripts = (email, password, token) => {
    return dispatch => {
        dispatch(initLoadScriptRequest())

        loadScripts().subscribe(
            scripts => { // On next
                console.log('Received scrips'. scripts)
                dispatch(successLoadScriptRequest(scripts))
            },
            error => { // On error
                console.log('Error loading scrips'. error)
                dispatch(failLoadScriptRequest(error))
            },
            () => { // On complete

            }
        )
    }
}

/*
 * State changes
 */

function initLoadScriptRequest() {
    return {
        type: DO_FETCH_SCRIPTS
    }
}

function successLoadScriptRequest(scripts) {
    return {
        type: FETCH_SCRIPTS_SUCCESS,
        payload: scripts
    }
}

function failLoadScriptRequest(error) {
    return {
        type: FETCH_SCRIPTS_FAILURE,
        payload: error
    }
}