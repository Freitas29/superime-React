import React, {useState, useEffect} from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar';
import './Favorites.scss'
import { MiniCard } from '../../../components/Card/Card'
import { axiosUrl as api } from '../../../services/api'

export default function Favorites(){
   
    const [favorites, setFavorites] = useState('')

    useEffect(() => {
        async function fetchFavorites(token){
            let response = await api.get('/v1/favorites', {
                headers: {
                    "X-User-Token": token 
                }
            })

            setFavorites(response.data)
        }
        const token = localStorage.getItem('token')
        fetchFavorites(token)
    }, []);


    return(
        <>
        <Sidebar />
        <div className="container-favorites">
                {favorites && favorites.map(favorite => (
                    <div key={favorite.id} className="wraper">
                        <MiniCard 
                            image={favorite.image}
                            title={favorite.title}
                            desc={favorite.description}
                            id={favorite.id}
                            favorite={favorite.favorited}
                        />
                    </div>
                ))}
        </div>
        </>
    )            
}