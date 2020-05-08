import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute } from '../utils/route_utils'
import LoginContainer from './containers/login_container'
import SignupContainer from './containers/signup_container'

const App = () => (
    <div>
        <Switch>
            <Route path='/login' component={LoginContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
        </Switch>
    </div>
)

export default App