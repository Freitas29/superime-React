import React, { Component } from 'react';
import Input from '../../components/Input/Input'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Loading from '../../components/Loading/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue,fetchAnime } from '../../redux/Input/SearchFieldActions'
import './Main.css'

class Main extends Component{

    render(){
        const animes = this.props.value && this.props.value.data.map( anime =>
            <Card 
                key={anime.id}
                image={anime.image}
                title={anime.title}
                desc={anime.description} />
        )
        return(
            <div className="Main">
                <div className="form-group">
                    <Input holder="Procure por seu anime!" value={this.props.value} onChange={this.props.fetchAnime}/>
                    <Button value="Buscar"/>
                </div>

                {this.props.loading && <Loading />}
               
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

const mapDispatchToProps = dispatch => bindActionCreators({changeValue,fetchAnime},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Main)