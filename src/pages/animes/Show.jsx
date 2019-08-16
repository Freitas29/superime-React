import React, { Component } from 'react'
import './Show.css'
import { graphqlUrl } from '../../services/api'
import { gql } from 'apollo-boost'
import { Link } from 'react-router-dom' 

class Show extends Component{

    state =  { 
        id: null,
        title: null,
        description: null,
        image: null,
        date_release: null,
        episodesCount: null,
        status: null,
    }

    async componentDidMount() {
        let id = this.props.match.params.id
            graphqlUrl
                .query({
                    query: gql`{
                        anime(id: ${id}) {
                            id
                            title
                            description
                            image
                            episodesCount
                            status
                            episodes {
                                id
                                url
                                title
                            }
                        }
                    }`
                }).then(response =>  this.anime(response.data))
    }

    
    anime(data){
        this.setState({
            id: data.anime.id,
            image: data.anime.image,
            title: data.anime.title,
            description: data.anime.description,
            episodesCount: data.anime.episodesCount,
            status: data.anime.status,
            episodes: data.anime.episodes
            //date_release: data.date_release
        })
    }

    handle_date_release(){
        if(this.state.date_release === null) return "Não informado" 
        return this.state.date_release
    }

    handle_status(){
        if(this.state.status === "emlançamento") return "Em lançamento"
        return this.state.status
    }

    render(){
        const animeId = this.state.id
        const episodes = this.state.episodes && this.state.episodes.map(ep => (
            ep.url.includes('error') ? <p>Episódio indisponivel</p> :
            <Link
                key={ep.id}
                to={{
                    pathname: `/animes/${animeId}/episodes/`,
                    state: { anime: this.state.title, animeId, episodeUrl: ep.url,episodeTitle: ep.title, episodes: this.state.episodes}
                }}>  
                <div key={ep.id}>
                    <div className="video-title">
                        <p>{ep.title}</p>    
                    </div>
                </div>
            </Link>        
        ))
        
        return(
            <div className="details">
                <div className="details-header">
                    <div className="img-box">
                        <img src={this.state.image} alt={this.state.image}/>
                    </div>
                    <div className="about">
                        <h1>{this.state.title}</h1>

                        <p>
                            {this.state.description}
                        </p>
                    </div>
                </div>

                <div className="more">
                    <div className="field">
                        <p><strong>Episodes: </strong> {this.state.episodesCount}</p>
                    </div>
                    <div className="field">
                        <p><strong>Status: </strong> {this.handle_status()}</p>
                    </div>
                    <div className="field">
                        <p><strong>Data de Lançamento: </strong> {this.handle_date_release()}</p>
                    </div>
                    <div className="field">
                        {episodes}
                    </div>
                </div>
            </div>
        )
    }
}
    

export default Show