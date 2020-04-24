import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM, REMOVE_ITEM } from '../actions/bucket_list_item_actions'

const bucketListItemReducer = (state={}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_ALL_ITEMS:
            return action.items 
        case RECEIVE_ITEM:
            newState[action.item.id] = action.item
            return newState
        case REMOVE_ITEM:
            delete newState[action.id]
        default: 
            return state
    }
}

export default bucketListItemReducer