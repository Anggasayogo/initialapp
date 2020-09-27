import React, { useState } from 'react'
import { Back } from '../../components'

const Kopdar = () => {
    const [file,setFile] = useState();

    const hanldeSubmit = ()=>{
        console.log(file);
    }
    return (
        
        <div className="container">
            <Back to="/member"/>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mb-2">
                        <label>Upload File</label>
                        <input type="file" name="nopol" className="form-control" placeholder="Nopol" 
                        onChange={e=>{setFile(e.target.value)}}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary mt-2 mx-auto" onClick={hanldeSubmit} id="btn">Submit!</button>
                </div>
            </div>
        </div>
    )
}

export default Kopdar
