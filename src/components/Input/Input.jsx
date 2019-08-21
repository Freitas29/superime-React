import React from 'react'
import './Input.scss'

const Input = props => 
    <input type={props.type || "text"} className={`input-search ${props.color || "primary"} `} placeholder={props.holder} onChange={props.onChange}/>

export default Input
