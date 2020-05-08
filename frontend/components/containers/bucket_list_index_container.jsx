import { connect } from 'react-redux'
import BucketListIndex from '../bucket_list_index'
import { fetchBucketListItems, addBucketListItem, deleteBucketListItem } from '../../actions/bucket_list_item_actions'
import { logoutUser } from '../../actions/session_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    bucketListItems: Object.values(state.entities.bucketListItems)
})

const mDTP = dispatch => ({
    fetchItems: () => dispatch(fetchBucketListItems()),
    addItem: item => dispatch(addBucketListItem(item)),
    logout: () => dispatch(logoutUser()),
    deleteItem: id => dispatch(deleteBucketListItem(id))
})

export default connect(mSTP, mDTP)(BucketListIndex)
