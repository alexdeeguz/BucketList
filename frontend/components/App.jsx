import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './containers/home_container'

const App = () => (
    <div>
        <Switch>
            <Route path="/home" component={HomeContainer} />
        </Switch>
    </div>
)

export default App