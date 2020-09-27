import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Back } from '../../components';
import CallApi from '../../config/callApi';

const DeleteMember = () => {

    let {id} = useParams();
    const history = useHistory();
    function destroy(id){
        Swal.fire({
            title: 'Do you want to deleted member ?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Yess`,
            denyButtonText: `Noo`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                CallApi("get",`delete/member/${id}`)
                .then(res=>{
                    console.log(res)
                    Swal.fire('Deleted member!', '', 'success')
                    history.push('/member')
                })
                .catch(err=>{
                    console.log(err)
                })
            } else if (result.isDenied) {
              Swal.fire("Member Don't Deleted",'', 'info')
              history.push('/member')
            }
        })
    }
    destroy(id);
    return (
        <Back to="/member"/>
    )
}

export default DeleteMember
