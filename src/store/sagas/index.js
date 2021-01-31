// sagas are executed as
// const sagaMiddleware = createSagaMiddleware() is a function from redux-saga package that we use in index js,
// applyMidlleware(sagaMiddleware) and then sagaMiddleWare.run(watchAuth)
// takeEvery works as a listener/watcher for some action and then executes our saga for that action

import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes.js";
import {
    logoutSaga,
    checkAuthTimeoutSaga,
    authSaga,
    tryAutoLoginSaga,
} from "./auth";

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.CHECK_AUTH_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_USER, authSaga);
    yield takeEvery(actionTypes.AUTO_AUTH, tryAutoLoginSaga);
}