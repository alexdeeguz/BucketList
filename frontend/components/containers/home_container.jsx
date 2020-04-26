import { connect } from 'react-redux'
import { getAllItems, createItem, deleteItem, updateItem } from '../../actions/bucket_list_item_actions'
import { getAllSubcategories, createSubcategory, deleteSubcategory, updateSubcategory } from '../../actions/subcategory_actions'
import Home from '../home'

const mSTP = state => ({
    bucketListItems: Object.values(state.bucketListItems),
    subcategories: Object.values(state.subcategories)
})

const mDTP = dispatch => ({
    getAllItems: () => dispatch(getAllItems()),
    addItem: item => dispatch(createItem(item)),
    deleteItem: id => dispatch(deleteItem(id)),
    addSubcategory: subcategory => dispatch(createSubcategory(subcategory)),
    getAllSubcategories: () => dispatch(getAllSubcategories())
})

export default connect(mSTP, mDTP)(Home)