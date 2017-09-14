import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import login from './login'
import scripts from './scripts'

export default combineReducers({
    routing: routerReducer,
    login,
    scripts
})