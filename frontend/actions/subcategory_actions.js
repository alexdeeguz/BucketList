import * as subcategoryAPIUtil from "../utils/subcategory_utils"
export const RECEIVE_ALL_SUBCATEGORIES = "RECEIVE_ALL_SUBCATEGORIES"
export const RECEIVE_SUBCATEGORY = "RECEIVE_SUBCATEGORY"
export const REMOVE_SUBCATEGORY = "REMOVE_SUBCATEGORY"

const receiveAllSubcategories = subcategories => ({
    type: RECEIVE_ALL_SUBCATEGORIES,
    subcategories
})

const receiveSubcategory = subcategory => ({
    type: RECEIVE_SUBCATEGORY,
    subcategory
})

const removeSubcategory = id => ({
    type: REMOVE_SUBCATEGORY,
    id
})

export const getAllSubcategories = () => dispatch => subcategoryAPIUtil.fetchAllSubcategories()
    .then(subcategories => dispatch(receiveAllSubcategories(subcategories)))

export const updateSubcategory = id => dispatch => subcategoryAPIUtil.updateSubcategory(id)
    .then(updatedCategory => dispatch(receiveSubcategory(updatedCategory)))

export const deleteSubcategory = id => dispatch => subcategoryAPIUtil.deleteSubcategory(id)
    .then(() => dispatch(removeSubcategory(id)))

export const createSubcategory = subcategory => dispatch => subcategoryAPIUtil.postSubcatgory(subcategory)
    .then(createdSubcategory => dispatch(receiveSubcategory(createdSubcategory)))