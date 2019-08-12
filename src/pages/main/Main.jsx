import React, { Component } from 'react';
import Input from '../../components/Input/Input'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Loading from '../../components/Loading/Loading'
import notFound from '../../assets/not_found.gif'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { changeValue,fetchAnime,scrapAnime } from '../../redux/Input/SearchFieldActions'
import './Main.css'

class Main extends Component{


    state = {
        anime: "",
    }

    handleField(e){
        this.setState({anime: e.target.value})
        this.search()
    }

    search(){
        this.props.fetchAnime(this.state.anime)
    }

    scraperAnime() {
        this.props.scrapAnime(this.state.anime)
    }

    render(){


        const animes = this.props.value && this.props.value.data.map( anime =>(
            anime.error && anime.error ? 
            
            <div className="notFound">
                <h2>Não foi possivel encontrar :(</h2>
                <img src={notFound} />
            </div>
             : 
            <Link to={`animes/${anime.id}`}>
                <Card 
                key={anime.id}
                image={anime.image}
                title={anime.title}
                desc={anime.description}
                id={anime.id} />
            </Link>
            
            )
        )
        return(
            <div className="Main">
                <div className={`form-group ${this.props.loading ?  'searching' : ''}`}>
                    <Input holder="Procure por seu anime!" value={this.props.value} onChange={e => this.handleField(e)}/>
                    <Button value="Buscar" onClick={e => this.scraperAnime()}/>
                </div>
                    {this.props.loading && <div className="mainLoading">
                        <Loading />
                        </div>
                    }
                               
                <div className="result-list">
                    {animes}
                </div>
            </div>
    
        )
    }
}
    
const mapStateToProps = state => ({
    value: state.input.value,
    loading: state.input.loading,

})

const mapDispatchToProps = dispatch => bindActionCreators({changeValue,fetchAnime,scrapAnime},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Main)