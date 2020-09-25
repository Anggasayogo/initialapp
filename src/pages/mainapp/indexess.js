import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../dashboard'
import Donasi from '../donasi'

const MainApp = () => {
    return (
        <div>
            <div>Headers</div>
            <Router>
               <Switch>
                   <Route path="/" component={Dashboard} exact/>
                   <Route path="/donasi" component={Donasi} />
               </Switch>
            </Router>
            <div>Footers</div>
        </div>
    )
}

export default MainApp
