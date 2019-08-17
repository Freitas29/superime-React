import React, { useState, useEffect } from 'react';
import Input from '../../components/Input/Input'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Loading from '../../components/Loading/Loading'
import notFound from '../../assets/not_found.gif'
import { axiosUrl } from '../../services/api'
import './Main.css'

export default function Main(props){


    const [anime, setAnime] = useState('')

    const [animeList, setAnimeList] = useState(null)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        function search(){
            setLoading(true)
            axiosUrl.get('/v1/animes/',{
                params: {
                    title: anime
                }
            }).then(response => {
                setAnimeList(response)
                setLoading(false)
            })

        }        

        search()

    }, [anime])

    

    function scraperAnime() {
        setLoading(true)
        axiosUrl.get(`/v1/animes/data/${anime}`,{
        }).then(response => {
            setAnimeList(response)
            setLoading(false)
        })
    }



        const animes = animeList && animeList.data.map( anime =>(
            anime.error && anime.error ? 
                <div className="notFound">
                    <h2>Não foi possivel encontrar</h2>
                    <img src={notFound} alt="Não encontrado"/>
                </div>
            :
                <Card
                  key={anime.id}
                  image={anime.image}
                  title={anime.title}
                  desc={anime.description}
                  id={anime.id} />            
        ))
        return(
            <div className="Main">
                <div className={`form-group ${loading ?  'searching' : ''}`}>
                    <Input holder="Procure por seu anime!" value={props.value} onChange={e => setAnime(e.target.value)}/>
                    <Button value="Buscar" onClick={e => scraperAnime()}/>
                </div>
                    {loading && <div className="mainLoading">
                        <Loading />
                        </div>
                    }
                               
                <div className="result-list">
                    {animes}
                </div>
            </div>
    
        )
}