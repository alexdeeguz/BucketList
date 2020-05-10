import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from '../actions/session_actions'

const UsersReducer = (state={}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_USERS:
            return action.users
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState
        default: 
            return state
    }
}

export default UsersReducer