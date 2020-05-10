import { connect } from 'react-redux'
import BucketListIndex from '../bucket_list_index'
import { fetchBucketListItems, addBucketListItem, deleteBucketListItem, updateBucketListItem } from '../../actions/bucket_list_item_actions'
import { logoutUser } from '../../actions/session_actions'
import { removeErrors } from '../../actions/session_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    bucketListItems: Object.values(state.entities.bucketListItems).sort((a,b) => a.completed - b.completed),
    errors: Object.values(state.errors)
})

const mDTP = dispatch => ({
    fetchItems: () => dispatch(fetchBucketListItems()),
    addItem: item => dispatch(addBucketListItem(item)),
    logout: () => dispatch(logoutUser()),
    deleteItem: id => dispatch(deleteBucketListItem(id)),
    editItem: (id, item) => dispatch(updateBucketListItem(id, item)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(BucketListIndex)
