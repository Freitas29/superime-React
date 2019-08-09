import React, { Component } from 'react'
import Player from 'react-player/lib/players/FilePlayer'
import './Episodes.css'

class Episodes extends Component {

    state = {
        episodes: null,
        currentEpisode: {
            title: null,
            url: null,
        }
    }

    componentDidMount() {
        let animeId = this.props.location.state.animeId
        let episodes = this.props.location.state.episodes

        this.setState({
            episodes,
            currentEpisode: {
                title: this.props.location.state.episodeTitle,
                url: this.props.location.state.episodeUrl
            }
        })
    }

    handleEpisode(title,url){
        debugger
        this.setState({
            currentEpisode: {
                title,
                url
            }
        })
    }
    

    render(){
        const episodes = this.state.episodes && this.state.episodes.map(ep => 
            <div className="episode" key={ep.id}>
                <p onClick={(e) => this.handleEpisode(ep.title,ep.url)}>{ep.title}</p>    
            </div>
        )

        return(
            <div className="details-player">
                <div className="player">
                    <h1>{this.state.currentEpisode.title}</h1>
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