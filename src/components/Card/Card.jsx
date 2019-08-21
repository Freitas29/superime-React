import React, {useState} from 'react';
import './Card.scss'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { Heart, HeartFill } from '../Emojis/Emojis'
import { axiosUrl as api } from '../../services/api.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
            notify()
        }
        
    }

    const notify = () => toast.warn("Você precisa fazer login para favoritar");            

    async function disfavor(anime_id){
        try{
            await api.delete(`/v1/favorites/${anime_id}`,{
                headers: {
                 "X-User-Token": localStorage.getItem('token')
                }
            })
            setFavorited(false)
        }catch(e){
            notify()
        }
    }

    return(
        <>
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
            <ToastContainer />
        </>
    )
}

export function MiniCard(props){

    const [favorited, setFavorited] = useState(props.favorite)
    
    async function favorite(anime_id){
        try{
            await api.post("/v1/favorites",{
                anime_id: anime_id,
                user_id: localStorage.getItem('id')
            })

            setFavorited(true)
        }catch(e){
            notify()
        }
        
    }

    const notify = () => toast.warn("Você precisa fazer login para favoritar");            

    async function disfavor(anime_id){
        try{
            await api.delete(`/v1/favorites/${anime_id}`,{
                headers: {
                 "X-User-Token": localStorage.getItem('token')
                }
            })
            setFavorited(false)
        }catch(e){
            notify()
        }
    }
    return(
     <>
        <div className="mini-card">
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
                <Link to={`/animes/${props.id}`}>
                    <Button type="btn-sm" value="Olhar"/>
                </Link>
            </div>
        </div>
        <ToastContainer />
    </>   
    )
}