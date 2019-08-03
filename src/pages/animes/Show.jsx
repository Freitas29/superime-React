import React, { Component } from 'react'
import './Show.css'
import axios from 'axios'

class Show extends Component{

    state =  { 
        id: null,
        title: null,
        description: null,
        image: null,
        date_release: null,
        episodes: null,
        status: null,
    }

    async componentDidMount() {
        let id = this.props.match.params.id
        let response = await axios({
            method: 'get',
            url: `http://localhost:3001/api/v1/animes/${id}`,
        })

        this.anime(response.data)
    }
    
    anime(data){
        this.setState({
            image: data.image,
            title: data.title,
            description: data.description,
            episodes: data.episodes,
            status: data.status,
            date_release: data.date_release
        })
    }

    handle_date_release(){
        if(this.state.date_release === null) return "Não informado" 
        return this.state.date_release
    }

    render(){
        return(
            <div className="details">
                <div className="details-header">
                    <div className="img-box">
                        <img src={this.state.image} />
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
                        <p><strong>Episodes: </strong> {this.state.episodes}</p>
                    </div>
                    <div className="field">
                        <p><strong>Status: </strong> {this.state.status}</p>
                    </div>
                    <div className="field">
                        <p><strong>Data de Lançamento: </strong> {this.handle_date_release()}</p>
                    </div>
                </div>
            </div>
        )
    }
}
    

export default Show