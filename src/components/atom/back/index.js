import React from 'react'
import { Link } from 'react-router-dom'
import { IcBack } from '../../../assets/icon'
import './back.css'

const Back = ({to}) => {
    return (
        <Link to={to} >
            <img src={IcBack} id="img" alt="back"/>
        </Link>
    )
}

export default Back
