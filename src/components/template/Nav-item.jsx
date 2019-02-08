import './Nav.css'
import React from 'react'
//import { Link } from 'react-router-dom'

export default props =>
    <a href={props.link}>
        <i className={`fa ${props.icon}`}></i>{props.label}
    </a>