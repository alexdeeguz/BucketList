import { connect } from 'react-redux'
import { getAllItems } from '../../actions/bucket_list_item_actions'
import Home from '../home'

const mSTP = state => ({
    bucketListItems: Object.values(state.bucketListItems)
})

const mDTP = dispatch => ({
    getAllItems: () => dispatch(getAllItems())
})

export default connect(mSTP, mDTP)(Home)