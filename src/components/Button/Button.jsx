import React from 'react';
import './Button.scss'


const Button = props =>
    <button className={ props.type ? props.type : "btn"} onClick={props.onClick}>{props.value}</button>

export default Button;