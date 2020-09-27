import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="list-group shadow p-3 mb-5 bg-white rounded">
            <Link to="/" className="list-group-item list-group-item-action">Dashboard</Link>
            <Link to="/member" className="list-group-item list-group-item-action">Members</Link>
            <Link to="/crm" className="list-group-item list-group-item-action">Crm</Link>
            <Link to="/kopdar" className="list-group-item list-group-item-action">Kopdar</Link>
            <Link to="/donasi" className="list-group-item list-group-item-action">Donasi</Link>
            <Link to="/pengumuman" className="list-group-item list-group-item-action">Pengumuman</Link>
            <Link to="/beritaacara" className="list-group-item list-group-item-action">Berita Acara</Link>
        </div>
    )
}

export default Header
