import React from 'react'
import { useHistory } from 'react-router-dom'
import './login.css'

const Login = () => {
    const history = useHistory();
    const hanldeSubmit = ()=>{
        history.push('/')
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="container" id="login">
                        <h3 className="text-center mb-4">Login Page</h3>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Input Email"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Input Password"/>
                        </div>
                        <button className="form-control btn btn-success mt-4" onClick={hanldeSubmit}>Login</button>
                    </div>
                </div>
                <div className="col-md-8 bg-primary" id="cover">
                </div>
            </div>
        </div>
    )
}

export default Login
