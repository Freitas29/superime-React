import React, {useState, useEffect} from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar';
import './Favorites.scss'
import { graphqlUrl as api } from '../../../services/api'
import { gql } from 'apollo-boost'


export default function Favorites(){
   
    const [favorites, setFavorites] = useState('')

    useEffect(() => {
        function fetchFavorites(id){
            api
            .query({
                query: gql`{
                    favorite(userId: ${id}) {
                        id
                        anime {
                            id
                            title
                        }
                    }
                }`
            }).then(response =>  saveData(response.data))
        }

        const id = localStorage.getItem('id')
        fetchFavorites(id)
    }, []);


    function saveData(data){
        setFavorites(data.favorite)
    }
    
    return(
        <>
        <Sidebar />
        <div className="container-favorites">
            <h1>
                {favorites && favorites.map(favorite => (
                    <div key={favorite.title}>
                        <p>
                            {favorite.anime.title}
                        </p>
                    </div>
                ))}
            </h1>
        </div>
        </>
    )            
}