import * as itemAPIUtil from '../utils/bucket_list_item_utils'
export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS"
export const RECEIVE_ITEM = "RECEIVE_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"

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

export const getAllItems = () => dispatch => itemAPIUtil.fetchAllItems()
    .then(items => dispatch(receiveAllItems(items)))

export const getItem = id => dispatch => itemAPIUtil.fetchItem(id)
    .then(item => dispatch(receiveItem(item)))

export const updateItem = id => dispatch => itemAPIUtil.updateItem(id)
    .then(updatedItem => dispatch(receiveItem(updatedItem)))

export const deleteItem = id => dispatch => itemAPIUtil.deleteItem(id)
    .then(() => dispatch(removeItem(id)))

export const createItem = item => dispatch => itemAPIUtil.postItem(item)
    .then(createdItem => dispatch(receiveItem(createdItem)))