import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-action';
import { authOperations } from '.';
import authAction from './auth-action';

const initialUserState = { name: null, email: null, password: null };


const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.logoutSuccess]: () => initialUserState,
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
})

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
    [authActions.logoutSuccess]: () => null,
})

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [authActions.registerError]: setError,
    [authActions.loginError]: setError,
    [authActions.logoutError]: setError,
    [authActions.getCurrentUserError]: setError,
})

const isAuthenticated = createReducer(false, {
    [authActions.registerSuccess]: () => true,
    [authActions.loginSuccess]: () => true,
    [authActions.getCurrentUserSuccess]: () => true,
    [authActions.logoutRequest]: () => true,
    [authActions.logoutError]: () => true,

    [authActions.registerRequest]: () => false,
    [authActions.registerError]: () => false,
    [authActions.loginRequest]: () => false,
    [authActions.loginError]: () => false,
    [authActions.getCurrentUserRequest]: () => false,
    [authActions.getCurrentUserError]: () => false,
    [authActions.logoutSuccess]: () => false
})


export default combineReducers({
    user,
    token,
    isAuthenticated,
    error
})