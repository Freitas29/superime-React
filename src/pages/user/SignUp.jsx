import React, { Component } from 'react'
import './SignUp.css'
import college from '../../assets/midoriya.jpg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {axiosUrl as api} from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createToken } from '../../redux/User/UserAction'

class User extends Component{
    
    state = {
        email: null,
        password: null,
        name: null,
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleName = (e) => {
        this.setState({
            name: e.targer.value
        })
    }

    notifyError = () => toast.error("Seus dados estão incorretos !");

     signIn = async () => {
        try{
            const response = await api.post('/v1/sessions/',{
                email: this.state.email,
                password: this.state.password
            })
            const { data: {authentication_token, email} } = response
            localStorage.setItem('email', email)
            this.props.history.goBack()
            this.props.createToken(authentication_token)
        }catch(e){
            this.handleErrors()  
        }
    }


    handleErrors = () => {
        this.notifyError()
    }
    render(){
        const signIn = (
        <div className="sign-up">
            <div className="form">
                <div className="card-header">
                    <h3>Olá, faça seu Cadastro</h3>
                </div>

                <div className="card-form">
                    <Input holder="E-mail" onChange={this.handleEmail} value={this.state.email}/>

                    <Input holder="Senha" type="password" onChange={this.handlePassword} value={this.state.password}/>
                
                    <Input holder="Nome" onChange={this.handleName} value={this.state.name}/>

                </div>
                <div className="card-footer">
                    <Button value="Entrar" onClick={this.signIn}/>
                </div>
            </div>
        </div>
        )

        const image = (
            <div className="image-background">
                <img src={college} />
            </div> 
        )

        return(
            <>
            <div className="containerSignUp">
               {image}
               {signIn}
            </div>
            <ToastContainer />
            </>
        )
    }
}

const mapStateToProps = state => ({
    token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({createToken},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(User)