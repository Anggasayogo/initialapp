import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../../components';
import callApi from '../../config/callApi';
import './member.css';

const Member = () => {
    const [memb,setMemb] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        callApi("get","member")
        .then(res=>{
            setMemb(res.data)
            setLoading(false)
        })
        .catch(err=>{
            console.log(err)
            setLoading(false)
        })
    },[])

    return (
        <>
        {
            loading && <Loading/>
        }
        <div>
        <h4 className="text-center">Members</h4>
          <Link to="/add/member" className="btn btn-primary fa fa-plus mb-3"></Link>
           <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Nra</th>
                        <th>Nopol</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        memb.map((e,i)=>{
                            return (

                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{e.full_name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.nra}</td>
                                    <td>{e.nopol}</td>
                                    <td>
                                        <Link className="fa fa-edit btn btn-warning btn-sm"to={`edit/member/${e.id_member}`} ></Link>
                                        <Link className="fa fa-trash btn btn-danger btn-sm ml-1" to={`destroy/member/${e.id_member}`} ></Link>
                                        <Link className="fa fa-eye btn btn-info btn-sm ml-1" to={`detail/${e.id_member}`}></Link>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Member
