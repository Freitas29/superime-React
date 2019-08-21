import React, {useState , useEffect} from 'react';
import './Card.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { Heart, HeartFill } from '../Emojis/Emojis'
import { axiosUrl as api } from '../../services/api.js'

export default function Card(props){
    const [favorited, setFavorited] = useState(props.favorite)
    
    async function favorite(anime_id){
        try{
            await api.post("/v1/favorites",{
                anime_id: anime_id,
                user_id: localStorage.getItem('id')
            })

            setFavorited(true)
        }catch(e){
            console.log(e);            
        }
        
    }

    async function disfavor(anime_id){
        try{
            await api.delete(`/v1/favorites/${anime_id}`,{
                headers: {
                 "X-User-Token": localStorage.getItem('token')
                }
            })
            setFavorited(false)
        }catch(e){
            console.log(e);
        }
    }

    return(
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
                <Button type="btn-icon" value={favorited ? <HeartFill /> : <Heart />} onClick={favorited ? e => disfavor(props.id) : e => favorite(props.id)}/>
                <Link to={`animes/${props.id}`}>
                    <Button value="Olhar"/>
                </Link>
            </div>
        </div>
    )
}