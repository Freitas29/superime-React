import React, { Component } from 'react'
import './SignIn.css'
import chihiro from '../../assets/chihiro.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {axiosUrl as api} from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createToken, updateUsername, updateEmail } from '../../redux/User/UserAction'

class SignIn extends Component{
    
    state = {
        email: null,
        password: null,
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

    notifyError = () => toast.error("Seus dados estão incorretos !");

     signIn = async () => {
        try{
            const response = await api.post('/v1/sessions/',{
                email: this.state.email,
                password: this.state.password
            })
            const { data: {id,authentication_token,name, email} } = response
            localStorage.setItem('id', id)
            this.props.history.goBack()
            this.props.updateUsername(name)
            this.props.updateEmail(email)
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
        <div className="sign-in">
            <div className="form">
                <div className="card-header">
                    <h3>Olá, faça seu login ;)</h3>
                </div>

                <div className="card-form">
                    <Input holder="E-mail" color="secondary" onChange={this.handleEmail} value={this.state.email}/>

                    <Input holder="Senha" color="secondary" type="password" onChange={this.handlePassword} value={this.state.password}/>
                </div>
                <div className="card-footer">
                    <Button value="Entrar" onClick={this.signIn}/>
                </div>
            </div>
        </div>
        )

        const image = (
            <div className="image-background">
                <img src={chihiro} alt="imag background"/>
            </div> 
        )

        return(
            <>
            <div className="container">
               {signIn}
               {image}
            </div>
            <ToastContainer />
            </>
        )
    }
}

const mapStateToProps = state => ({
    token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({createToken, updateUsername, updateEmail},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)