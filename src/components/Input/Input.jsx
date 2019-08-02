import React from 'react'
import './Input.css'

const Input = props => 
    <input className="input-search" placeholder={props.holder} onChange={props.onChange}/>

export default Input