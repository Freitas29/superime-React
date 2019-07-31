import React from 'react';
import './Card.css'
import Button from '../Button/Button'

const Card = props =>
    <div className="card">
        <div className='card-image'>
            <img src={props.image}/>
        </div>

        <div className="card-details">
            <div className="card-title">
                <h1>{props.title}</h1>
            </div>
            <div className="card-description">
                <p>{props.desc}</p>
            </div>
        </div>
        <div className="actions">
            <Button value="Olhar"/>
        </div>
    </div>

export default Card