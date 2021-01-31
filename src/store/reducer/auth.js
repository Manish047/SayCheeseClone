import updateObject from '../utility';
import * as actionTypes from '../actions/actionTypes.js';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
}

const authStart = state => {
    return updateObject(state, {
        loading: true,
        error: null
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        token: action.token,
        userId: action.userId
    });
}

const authFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
}

const authLogout = (state) => {
    return updateObject(state, {
        token: null,
        userId: null
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.AUTH_START):
            return authStart(state);
        case (actionTypes.AUTH_SUCCESS):
            return authSuccess(state, action);
        case (actionTypes.AUTH_FAILED):
            return authFailed(state, action);
        case (actionTypes.AUTH_LOGOUT):
            return authLogout(state, action);
        default:
            return state;
    }
}

export default reducer;