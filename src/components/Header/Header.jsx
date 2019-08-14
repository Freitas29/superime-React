import React from 'react'
import './Header.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeToken } from '../../redux/User/UserAction'


const Header = (props) => {

    return(
        <header>
            <Link to="/">
                <div className="logo">
                    Superime
                </div>
            </Link>
            
            <div className="links">
            { props.token ? 
                <>
                    <Link to="/user/edit">
                        <Button value="Perfil"/>
                    </Link>

                    
                        <Button value="Sair" onClick={props.removeToken}/>
                    
                </>
            :
                <>
                <Link to="/user/sign-up">
                    <Button value="Registrar-se"/>
                </Link>

                <Link to="/user/sign-in">
                    <Button value="Entrar"/>
                </Link>
                </>
            }
            </div>
        
        </header>
    )
}

const mapStateToProps = state => ({
    token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({removeToken},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Header)