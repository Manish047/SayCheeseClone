// This file contains all the sagas related to authentication
// sagas are just functions that can run async code and then dispatch any action that will reflect changes in reducers
// function* are generator functions which can be paused during async code
// Generator Don't run from start to end immediately
// yield allows one statement to complete at a time and then move ahead

import axios from "axios";
import { put } from "redux-saga/effects"; // put will dipatch a new action
import { delay } from "redux-saga/effects"; // delays the exexution of some code

import * as actions from "../actions/index";

const webAPIKey = "AIzaSyDe_v2z5qbxDuCQ62Rp1MJrrQV2RvBjFGk";

export function* logoutSaga(action) {
    yield localStorage.removeItem("token");
    yield localStorage.removeItem("expirationDate");
    yield localStorage.removeItem("userId");
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000); // Wait for token to expire
    yield put(actions.logout());
}

export function* authSaga(action) {
    let url = "";
    if (action.isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        webAPIKey;
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        webAPIKey;
    }
    yield put(actions.authStart());
    const authData = {
      email: action.email,
      password: action.password,
      returnSecureToken: true,
    };
    try {
      const response = yield axios.post(url, authData);
      const expirationDate = yield new Date(
        new Date().getTime() + response.data.expiresIn * 1000
      );
      yield localStorage.setItem("token", response.data.idToken);
      yield localStorage.setItem("expirationDate", expirationDate);
      yield localStorage.setItem("userId", response.data.localId);
      yield put(
        actions.authSuccess(response.data.idToken, response.data.localId)
      );
      yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
      yield put(actions.authFailed(error.response.data.error));
    }
  }

export function* tryAutoLoginSaga(action) {
    const token = yield localStorage.getItem("token");
    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(
            localStorage.getItem("expirationDate")
        );
        if (expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
            const userId = yield localStorage.getItem("userId");
            yield put(actions.authSuccess(token, userId));
            yield put(
                actions.checkAuthTimeout(
                    (expirationDate.getTime() - new Date().getTime()) / 1000
                )
            );
        }
    }
}