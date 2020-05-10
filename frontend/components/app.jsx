import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import LoginContainer from './containers/login_container'
import SignupContainer from './containers/signup_container'
import BucketListIndexContainer from './containers/bucket_list_index_container'

const App = () => (
    <div>
        <Switch>
            <AuthRoute path='/login' component={LoginContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
            <ProtectedRoute path='/bucket-list' component={BucketListIndexContainer} />
            <ProtectedRoute path='/' component={BucketListIndexContainer} />
        </Switch>
    </div>
)

export default App