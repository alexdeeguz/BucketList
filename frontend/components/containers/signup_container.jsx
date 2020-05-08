import { connect } from 'react-redux'
import SessionForm from '../session_form'
import { signupUser, removeErrors } from '../../actions/session_actions'


const mSTP = state => ({
    errors: state.errors,
    formType: 'sign up'
})

const mDTP = dispatch => ({
    action: user => dispatch(signupUser(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm)