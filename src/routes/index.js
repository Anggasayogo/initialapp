import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login, MainApp, Splash } from '../pages'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/splash" component={Splash}/>
            <Route path="/dashboard" component={MainApp} />
        </Switch>
    )
}

export default Routes
