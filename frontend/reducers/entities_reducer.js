import { combineReducers } from 'redux'
import UsersReducer from './users_reducer'
import BucketListItemReducer from './bucket_list_items_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    bucketListItems: BucketListItemReducer
})

export default EntitiesReducer