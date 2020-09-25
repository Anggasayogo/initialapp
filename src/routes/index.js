import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login, MainApp, Splash } from '../pages'

const Routes = () => {
    return (
        <Switch>
            <Route path="/splash" component={Splash} exact/>
            <Route path="/login" component={Login} />
            <Route path="/" component={MainApp} />
        </Switch>
    )
}

export default Routes
