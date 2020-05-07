import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginContainer from './containers/login_container'

const App = () => (
    <div>
        <Switch>
            <Route path="/" component={LoginContainer} />
        </Switch>
    </div>
)

export default App