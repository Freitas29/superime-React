import React from 'react';
import Input from '../../components/Input/Input'
import Card from '../../components/Card/Card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue,fetchAnime } from '../../redux/Input/SearchFieldActions'
import './Main.css'


const Main = props =>
            <div className="Main">
                <div className="form-group">
                    <Input holder="Procure por seu anime!" value={props.value} onChange={props.fetchAnime}/>
                </div>
                {props.loading && <p>Carregando</p>}
                <p>vkljdl valor: {props.value}</p>
                <button onClick={props.fetchAnime}>
                    click aqui
                </button>
                <div className="result-list">
                    <Card 
                    image="https://animeshouse.net/wp-content/uploads/2019/04/93482l-250x350.jpg"
                    title="Kimtesu no yaiba"
                    desc="Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão,
                    descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko,
                    sua irmã mais nova e única sobrevivente, também foi transformada num demônio.
                    Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de 
                    demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que 
                    matou sua família. Um triste conto sobre dois irmãos,
                    onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.
                    " />
                </div>
            </div>
    
    
const mapStateToProps = state => ({
    value: state.input.value,
    loading: state.input.loading,

})

const mapDispatchToProps = dispatch => bindActionCreators({changeValue,fetchAnime},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Main)