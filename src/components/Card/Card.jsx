import React from 'react';
import './Card.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Card = props =>
    <div className="card">
        <div className='card-image'>
            <img src={props.image} alt={props.image}/>
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
            <Link to={`animes/${props.id}`}>
                <Button value="Olhar"/>
            </Link>
        </div>
    </div>

export default Card