import * as BucketListItemAPI from '../utils/bucket_list_item_utils'
export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS"
export const RECEIVE_ITEM = "RECEIVE_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveAllItems = items => ({
    type: RECEIVE_ALL_ITEMS,
    items
})

const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
})

const removeItem = id => ({
    type: REMOVE_ITEM,
    id
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const fetchBucketListItems = () => dispatch => BucketListItemAPI.fetchAllItems()
    .then(items => dispatch(receiveAllItems(items)))

export const addBucketListItem = item => dispatch => BucketListItemAPI.createItem(item)
    .then(createdItem => dispatch(receiveItem(createdItem)), 
        error => dispatch(receiveErrors(error.responseJSON)))

export const deleteBucketListItem = id => dispatch => BucketListItemAPI.deleteItem(id)
    .then(() => dispatch(removeItem(id)))

export const completeBucketListItem = (id, item) => dispatch => BucketListItemAPI.updateItem(id, item)
    .then(updatedItem => dispatch(receiveItem(updatedItem)))
