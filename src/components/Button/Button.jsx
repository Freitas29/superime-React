import React from 'react';
import './Button.css'


const Button = props =>
    <button className="btn" onClick={props.onClick}>{props.value}</button>

export default Button;