import React from 'react'
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom'
import { Header, Topbar } from '../../components'
import BeritaAcara from '../beritaacara'
import Crm from '../crm'
import Dashboard from '../dashboard'
import Donasi from '../donasi'
import Kopdar from '../kopdar'
import Member from '../member'
import Pengumuman from '../pengumuman'

const MainApp = () => {
    return (
        <>
            <Topbar/>
            <Router>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="container mt-2">
                        <Header/>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="container mt-2 shadow p-3 mb-5 bg-white rounded">
                    <Switch>
                        <Route path="/" component={Dashboard} exact/>
                        <Route path="/member" component={Member} />
                        <Route path="/pengumuman" component={Pengumuman} />
                        <Route path="/crm" component={Crm} />
                        <Route path="/donasi" component={Donasi} />
                        <Route path="/beritaacara" component={BeritaAcara} />
                        <Route path="/kopdar" component={Kopdar} />
                    </Switch>
                    </div>
                </div>
            </div>
            </div>
            </Router>
        </>
    )
}

export default MainApp
