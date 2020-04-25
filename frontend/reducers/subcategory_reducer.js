import { RECEIVE_ALL_SUBCATEGORIES, RECEIVE_SUBCATEGORY, REMOVE_SUBCATEGORY } from '../actions/subcategory_actions'

const SubcategoryReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_SUBCATEGORIES:
            return action.subcategories
        case RECEIVE_ITEM:
            newState[action.subcategory.id] = action.subcategory
            return newState
        case REMOVE_ITEM:
            delete newState[action.id]
        default:
            return state
    }
}

export default SubcategoryReducer