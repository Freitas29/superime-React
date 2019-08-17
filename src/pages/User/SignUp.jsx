import React, { Component } from 'react'
import './SignUp.css'
import kimi from '../../assets/kimi.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {axiosUrl as api} from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createToken, updateUsername, updateEmail } from '../../redux/User/UserAction'

class SignUp extends Component{
    
    state = {
        email: null,
        password: null,
        name: null,
        password_confirmation: null,
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

    handlePasswordConfirmation = (e) => {
        this.setState({
            password_confirmation: e.target.value
        })
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    notifyError = (error) => toast.error(`${error} !`);
       

     signUp = async (e) => {
         e.preventDefault()
        if(!this.handleErrors()){
            return false
        }
        try{
            const response = await api.post('/v1/users/',{
                user: {
                    email: this.state.email,
                    password: this.state.password,
                    password_confirmation: this.state.password_confirmation,
                    name: this.state.name  
                }
            })
            const { data: {id,authentication_token,name, email} } = response
            localStorage.setItem('id',id)
            this.props.updateEmail(email)
            this.props.updateUsername(name)
            this.props.createToken(authentication_token)
            this.props.history.goBack()
        }catch(e){
            this.handleErrors(e.response.data[0])  
        }
    }


    handleErrors = (e = null) => {
        const errors = this.FieldsErrors() 

        if(e !== null)
            errors.push(e)
        
        errors.forEach( (field) => {
            this.notifyError(field)
        })

        if(errors.length !== 0)
            return false
        else
            return true
    }

    FieldsErrors = () => {
        const { 
            name,
            email,
            password,
            password_confirmation
        } = this.state

        const errors = []

        if(name === null)
            errors.push("Preencha o campo nome")

        if(email === null)
            errors.push("Preencha o campo e-mail")

        if (password === null)
            errors.push("Preecha o campo senha")

        if (password_confirmation === null)
            errors.push("Preencha o campo confirme sua senha")

        if (password_confirmation !== null && password_confirmation !== password)
            errors.push("Senhas não coincidem")

        return errors
        
    } 

    render(){
        const signUp = (
        <div className="sign-up">
            <form className="form">
                <div className="card-header">
                    <h3>Olá, faça seu Cadastro</h3>
                </div>

                <div className="card-form">
                    <Input holder="E-mail" color="dark" onChange={this.handleEmail} value={this.state.email}/>

                    <Input holder="Senha"  color="dark" type="password" onChange={this.handlePassword} value={this.state.password}/>
                
                    <Input  color="dark" holder="Confirme sua senha" type="password" onChange={this.handlePasswordConfirmation} value={this.state.password_confirmation}/>

                    <Input color="dark" holder="Nome" onChange={this.handleName} value={this.state.name}/>

                </div>
                <div className="card-footer">
                    <Button value="Cadastrar" onClick={ e => this.signUp(e)}/>
                </div>
            </form>
        </div>
        )

        const image = (
            <div className="image-background">
                <img src={kimi} alt="background"/>
            </div> 
        )

        return(
            <>
            <div className="containerSignUp">
               {image}
               {signUp}
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

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)