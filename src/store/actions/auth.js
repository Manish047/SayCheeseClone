// This file only contains action creators that just return objects that will be dispatched at some point

import * as actionTypes from './actionTypes.js';

// Dispatch(put) to show spinner INSIDE authSaga
// Leads to reducer
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

// Dispatch to signIn/signUp user
// Leads to authSaga
export const auth = (email, password, isSignUp) => {
    return {
        type: actionTypes.AUTH_USER,
        email: email,
        password: password,
        isSignUp: isSignUp
    }
}

// Dispatch(put) after successful signIn/signUp INSIDE authSaga
// Leads to reducer
export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

// Dispatch(put) if auth fails INSIDE authSaga
// Leads to reducer
export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
}

// Dispatch if there is no 1) token, 2) time has expied or 3) auto logout after Auth Timeout 
// Leads to logoutSaga, may it be 'put' INSIDE any other saga
export const logout = () => {
    return { type: actionTypes.AUTH_INITIATE_LOGOUT }
}

// Dispatched(put) INSIDE logoutSaga
// Leads to reducer
export const logoutSucceed = () => {
    return { type: actionTypes.AUTH_LOGOUT }
}

// Dispatch to auto logout if time expired
// Leads to checkAuthTimeoutSaga, may it be 'put' INSIDE any other saga
export const checkAuthTimeout = (expirationTime) => {
    return { type: actionTypes.CHECK_AUTH_TIMEOUT, expirationTime: expirationTime }
}

// Dispatch in componentDidMount() of App to auto login
// Leads to tryAutoLoginSaga
export const tryAutoLogin = () => {
    return {
        type: actionTypes.AUTO_AUTH
    }
}