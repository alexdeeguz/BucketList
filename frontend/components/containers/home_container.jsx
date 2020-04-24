import { connect } from 'react-redux'
import { getAllItems, createItem, deleteItem, updateItem } from '../../actions/bucket_list_item_actions'
import Home from '../home'

const mSTP = state => ({
    bucketListItems: Object.values(state.bucketListItems)
})

const mDTP = dispatch => ({
    getAllItems: () => dispatch(getAllItems()),
    addItem: item => dispatch(createItem(item)),
    deleteItem: id => dispatch(deleteItem(id))
})

export default connect(mSTP, mDTP)(Home)