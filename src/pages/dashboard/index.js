import React from 'react'
import { Header, Topbar } from '../../components'

const Dashboard = () => {
    return (
        <div>
            <div className="container mt-4">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Angga Maulana</td>
                                <td>anggasayogosm@gmail.com</td>
                                <td>123456</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
        </div>
    )
}

export default Dashboard
