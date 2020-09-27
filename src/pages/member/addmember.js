import Axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Back, Loading } from '../../components'
import CallApi from '../../config/callApi';
import './member.css'


const AddMember = () => {

    const [nopol,setNopol] = useState('');
    const [fullname,setFullname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [varian,setVarian] = useState('');
    const [nra,setNra] = useState('');
    const [aliasname,setAliasname] = useState('');
    const [password,setPassword] = useState('');
    const [addres,setAddres] = useState('');
    const [warna,setWarna] = useState('');
    const [loading,setLoading] = useState(false)

    const history = useHistory();
    const hanldeSubmit = ()=>{
        setLoading(true)
        const data = {
            "nopol" : nopol,
            "full_name" : fullname,
            "email" : email,
            "phone" : phone,
            "varian" : varian,
            "nra" : nra,
            "alias_name" : aliasname,
            "password" : password,
            "alamat" : addres,
            "warna" : warna,
        }
        if(data){
            CallApi("post","add/member",data)
            .then(res=>{
                console.log(res)
                setLoading(false)
                Swal.fire('Yeay...', 'member baru berhasil Ditambahkan !', 'success')
                history.push('/member')
            })
            .catch(err=>{
                console.log(err)
                setLoading(false)
            })
        }else{
            Swal.fire('Upsss...','Data Tidak bOleh Kosong','error')
        }
    }

    return (
        <div className="container">
            {
                loading && <Loading/>
            }
            <Back to="/member"/>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mb-2">
                        <label>Nopol</label>
                        <input type="text" name="nopol" onChange={e=>{ setNopol(e.target.value) }} className="form-control" placeholder="Nopol"/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Full Name</label>
                        <input type="text" name="fullname" onChange={e=>{setFullname(e.target.value)}} className="form-control" placeholder="Full Name"/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Email</label>
                        <input type="email" name="email" onChange={e=>{setEmail(e.target.value)}} className="form-control" placeholder="Input Emails"/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Phone Number</label>
                        <input type="text" name="phone" onChange={e=>{ setPhone(e.target.value) }} className="form-control" placeholder="Phone Number"/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Varian</label>
                        <input type="text" name="varian" onChange={e=>{ setVarian(e.target.value) }} className="form-control" placeholder="Input Varian"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-2">
                        <label>Nra</label>
                        <input type="text" name="nra" onChange={e=>{setNra(e.target.value)}} className="form-control" placeholder="Nra"/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Alias Name</label>
                        <input type="text" name="aliasname" onChange={e=>{ setAliasname(e.target.value) }} className="form-control" placeholder="Aliasname"/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input type="password" name="password" onChange={e=>{ setPassword(e.target.value) }} className="form-control" placeholder="Input Password"/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Addres</label>
                        <textarea className="form-control" onChange={e=>{ setAddres(e.target.value) }} name="addres"></textarea>
                    </div>
                    <div className="form-group mb-2">
                        <label>Warna Mobil</label>
                        <input type="text" name="warna" onChange={e=>{setWarna(e.target.value)}} className="form-control" placeholder="Input Warna"/>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary mt-2 mx-auto" onClick={hanldeSubmit} id="btn">Submit!</button>
        </div>
    )
}

export default AddMember
