import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login, MainApp, NotFound, Splash } from '../pages'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/splash" component={Splash}/>
            <Route path="/dashboard" component={MainApp} exact/>
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Routes
