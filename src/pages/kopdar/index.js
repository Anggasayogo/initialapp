import React, { useEffect, useState } from 'react'
import CallApi from '../../config/callApi';
import { Link } from 'react-router-dom';
import { Loading } from '../../components';

const Kopdar = () => {
  const [kopdar,setKopdar] = useState([]);
  const [loading,setLoading] = useState('')

  useEffect(()=>{
    setLoading(true)
    CallApi("get","kopdar")
    .then(res=>{
      setKopdar(res.data)
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
                    <th>Title</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    kopdar.map((e,i)=>{
                        return (

                            <tr key={i}>
                                <td>{i}</td>
                                <td>{e.title_kopdar}</td>
                                <td>{e.description_kopdar}</td>
                                <td>{e.tujuan_lokasi}</td>
                                <td>
                                        <Link className="fa fa-edit btn btn-warning btn-sm"to={`edit/member/${e.id_kopdar}`} ></Link>
                                        <Link className="fa fa-trash btn btn-danger btn-sm mt-1" to={`destroy/member/${e.id_kopdar}`} ></Link>
                                        
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

export default Kopdar
