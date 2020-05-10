import { connect } from 'react-redux'
import SessionForm from '../session_form'
import { signupUser, removeErrors, getAllUsers } from '../../actions/session_actions'


const mSTP = state => ({
    errors: Object.values(state.errors.session),
    formType: 'sign up',
    users: Object.values(state.entities.users)
})

const mDTP = dispatch => ({
    action: user => dispatch(signupUser(user)),
    removeErrors: () => dispatch(removeErrors()),
    getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mSTP, mDTP)(SessionForm)