import { connect} from 'react-redux'
import SessionForm from '../session_form'
import { loginUser, removeErrors } from '../../actions/session_actions'


const mSTP = state => ({
    errors: state.errors,
    formType: 'login'
})

const mDTP = dispatch => ({
    login: user => dispatch(loginUser(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm)