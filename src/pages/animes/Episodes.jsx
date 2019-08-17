import React, { Component } from 'react'
import Player from 'react-player/lib/players/FilePlayer'
import './Episodes.css'
import { graphqlUrl } from '../../services/api'
import { gql } from 'apollo-boost'
class Episodes extends Component {

    state = {
        episodes: null,
        currentEpisode: {
            title: null,
            url: null,
        }
    }

    componentDidMount() {
        let episodes
        let title
        let url
        let anime
        if(this.validateAnime()){
            episodes = this.props.location.state.episodes 
            title = this.props.location.state.episodeTitle
            url = this.props.location.state.episodeUrl
            anime = this.props.location.state.anime
            this.handleData(anime,episodes,title,url)
        }else{
            this.fetchData(this.props.match.params.id)
        }
    
    }

    validateAnime(){
        if(this.props.location.state === undefined) return false
        if(this.props.location.state === undefined) return false
        return true
    }

    fetchData(id){
        graphqlUrl
        .query({
            query: gql`{
                anime(id: ${id}) {
                    id
                    title
                    episodes {
                        id
                        url
                        title
                    }
                }
            }`
        }).then(response =>  this.handleAnime(response.data))
    }

    handleAnime = (data) => { 
        let episodes = data.anime.episodes
        let title = data.anime.episodes[0].title
        let url = data.anime.episodes[0].url
        let anime = data.anime.title
        this.handleData(anime,episodes,title,url)
    }

    handleData(anime,episodes,title,url){
        this.setState({
            anime,
            episodes,
            currentEpisode: {
                title,
                url
            }
        })  
    }

    handleEpisode(title,url){
        this.setState({
            currentEpisode: {
                title,
                url
            }
        })
    }
    

    render(){
        const episodes = this.state.episodes && this.state.episodes.map(ep => 
            <div className="episode"  key={ep.id}>
                <p  key={ep.id} onClick={(e) => this.handleEpisode(ep.title,ep.url)}>{ep.title}</p>    
            </div>
        )

        return(
            <div className="details-player">
                <div className="player">
                    
                    <h1>{this.state.anime} - {this.state.currentEpisode.title}</h1>
                    <Player 
                    url={this.state.currentEpisode.url}
                    controls/>
                </div>
                <div className="list-episodes">
                    {episodes}
                </div>
            </div>
        )
    }
}

export default Episodes