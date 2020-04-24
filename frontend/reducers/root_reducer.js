import { combineReducers } from 'redux'
import bucketListItemsReducer from './bucket_list_item_reducer'

const rootReducer = combineReducers({
    bucketListItems: bucketListItemsReducer
})

export default rootReducer