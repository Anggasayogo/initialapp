import Axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2';
import { Loading } from '../../components';
import './login.css'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false)

    const history = useHistory();
    const hanldeSubmit = ()=>{
        setLoading(true)
        Axios.post("https://senada.cikupalearningcenter.com/login/member",{
            "email" : email,
            "password" : password,
        })
        .then(res=>{
            setLoading(false)
            // console.log(res.data.data.api_token);
            localStorage.setItem('api_token',res.data.data.api_token)
            history.push('/')
        })
        .catch(err=>{
            console.log(err)
            setLoading(false)
            Swal.fire('Went Wrong !', `Error Ocureted`, 'error')
        })
        //console.log('Email',email,password)
        //history.push('/')
    }

    return (

        <>
        {
            loading && <Loading/>
        }
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="container" id="login">
                        <h3 className="text-center mb-4">Login Page</h3>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" onChange={e=>{setEmail(e.target.value)}} className="form-control" placeholder="Input Email"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onChange={e=>{setPassword(e.target.value)}} className="form-control" placeholder="Input Password"/>
                        </div>
                        <button className="form-control btn btn-success mt-4" disabled={loading} onClick={hanldeSubmit}>Login</button>
                    </div>
                </div>
                <div className="col-md-8 bg-primary" id="cover">
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
