import React, { Component } from 'react'
import './User.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {axiosUrl as api} from '../../services/api'

class User extends Component{
    
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

     signIn = async () => {
        try{
            const response = await api.post('/v1/sessions/',{
                email: this.state.email,
                password: this.state.password
            })
            const { data: {authentication_token, email} } = response

            localStorage.setItem('token', authentication_token)
            localStorage.setItem('email', email)
        }catch(e){
            this.handleErrors()  
        }
    }


    handleErrors = () => {
        alert("Errors")
    }
    render(){
        const signIn = (
        <div className="sign-in">
            <div className="card">
                <div className="card-header">
                    <h3>Olá, faça seu login ;)</h3>
                </div>

                <div className="card-form">
                    <Input holder="E-mail" onChange={this.handleEmail} value={this.state.email}/>

                    <Input holder="Senha" type="password" onChange={this.handlePassword} value={this.state.password}/>
                </div>
                <div className="card-footer">
                    <Button value="Entrar" onClick={this.signIn}/>
                </div>
            </div>
        </div>
        )

        const image = (
            <h1>Image</h1>
        )

        return(
            <div className="container">
               {signIn}
               {image}
            </div>
        )
    }
}

export default User