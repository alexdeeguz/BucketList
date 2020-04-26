import { combineReducers } from 'redux'
import bucketListItemsReducer from './bucket_list_item_reducer'
import subcategoryReducer from './subcategory_reducer'

const rootReducer = combineReducers({
    bucketListItems: bucketListItemsReducer,
    subcategories: subcategoryReducer
})

export default rootReducer