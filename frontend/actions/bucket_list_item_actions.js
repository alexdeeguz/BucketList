import * as BucketListItemAPI from '../utils/bucket_list_item_utils'
export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS"
export const RECEIVE_ITEM = "RECEIVE_ITEM"

const receiveAllItems = items => ({
    type: RECEIVE_ALL_ITEMS,
    items
})

const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
})

export const fetchBucketListItems = () => dispatch => BucketListItemAPI.fetchAllItems()
    .then(items => dispatch(receiveAllItems(items)))

export const addBucketListItem = item => dispatch => BucketListItemAPI.createItem(item)
    .then(createdItem => dispatch(receiveItem(createdItem)))