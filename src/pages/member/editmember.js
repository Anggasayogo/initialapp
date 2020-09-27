import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Back, Loading } from '../../components';
import CallApi from '../../config/callApi';

const EditMember = () => {
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
    const [cadanganps,setCadanganps] = useState('')

    const {id} = useParams();

    useEffect(()=>{
        function Details(id){
            CallApi("get",`member/${id}`)
            .then(res=>{
                console.log(res.data)
                setNopol(res.data.nopol);
                setNra(res.data.nra);
                setEmail(res.data.email);
                setPhone(res.data.phone);
                setVarian(res.data.varian);
                setAliasname(res.data.pseudonym);
                setAddres(res.data.alamat);
                setWarna(res.data.warna);
                setFullname(res.data.full_name)
                setCadanganps(res.data.password)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        Details(id)
    },[])

    const history = useHistory();
    const hanldeSubmit = ()=>{
        setLoading(true)
        if(password){
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

            CallApi("post",`update/member/${id}`,data)
            .then(res=>{
                setLoading(false)
                Swal.fire('Yeay...', `${res.message}`, 'success')
                history.push('/member')
            })
            .catch(err=>{
                setLoading(false)
                console.log(err)
            })
        }else{
            const data = {
                "nopol" : nopol,
                "full_name" : fullname,
                "email" : email,
                "phone" : phone,
                "varian" : varian,
                "nra" : nra,
                "alias_name" : aliasname,
                "password" : cadanganps,
                "alamat" : addres,
                "warna" : warna,
            }
            CallApi("post",`update/member/${id}`,data)
            .then(res=>{
                setLoading(false)
                Swal.fire('Yeay...', `${res.message}`, 'success')
                history.push('/member')
            })
            .catch(err=>{
                setLoading(false)
                console.log(err)
            })
        }

    }

    return (
        <div className="container">
            {loading && <Loading/> }
            <Back to="/member"/>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mb-2">
                        <label>Nopol</label>
                        <input type="text" name="nopol" onChange={e=>{ setNopol(e.target.value) }} className="form-control" value={nopol} />
                    </div>
                    <div className="form-group mb-2">
                        <label>Full Name</label>
                        <input type="text" name="fullname" onChange={e=>{setFullname(e.value)}} className="form-control" value={fullname}/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Email</label>
                        <input type="email" name="email" onChange={e=>{setEmail(e.target.value)}} className="form-control" value={email}/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Phone Number</label>
                        <input type="text" name="phone" onChange={e=>{ setPhone(e.target.value) }} className="form-control" value={phone}/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Varian</label>
                        <input type="text" name="varian" onChange={e=>{ setVarian(e.target.value) }} className="form-control" value={varian}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-2">
                        <label>Nra</label>
                        <input type="text" name="nra" onChange={e=>{setNra(e.target.value)}} className="form-control" value={nra}/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Alias Name</label>
                        <input type="text" name="aliasname" onChange={e=>{ setAliasname(e.target.value) }} className="form-control" value={aliasname}/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input type="password" name="password" onChange={e=>{ setPassword(e.target.value) }} className="form-control" placeholder="Input Password"/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Addres</label>
                        <textarea className="form-control" onChange={e=>{ setAddres(e.target.value) }} name="addres" value={addres}></textarea>
                    </div>
                    <div className="form-group mb-2">
                        <label>Warna Mobil</label>
                        <input type="text" name="warna" onChange={e=>{setWarna(e.target.value)}} className="form-control" value={warna}/>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary mt-2 mx-auto" onClick={hanldeSubmit} id="btn">Submit!</button>
        </div>
    )
}

export default EditMember
