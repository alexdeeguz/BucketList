import * as SessionUtil from '../utils/session_utils'
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_ERRORS = "REMOVE_ERRORS"
export const RECEIVE_USERS = "RECEIVE_USERS"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const removeErrors = () => ({
    type: REMOVE_ERRORS
})

export const loginUser = user => dispatch => SessionUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), 
        error => dispatch(receiveErrors(error.responseJSON)))

export const signupUser = user => dispatch => SessionUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))

export const logoutUser = () => dispatch => SessionUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))

export const getAllUsers = () => dispatch => SessionUtil.getUsers()
    .then(users => dispatch(receiveUsers(users)))



