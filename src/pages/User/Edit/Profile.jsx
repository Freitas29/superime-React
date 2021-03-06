import React, { useState, useEffect} from 'react'
import './Profile.scss'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import {axiosUrl as api} from '../../../services/api.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEmail, updateUsername } from '../../../redux/User/UserAction'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { EyeBroken, Eye} from '../../../components/Emojis/Emojis'

function Profile(props){  
    
    const [ type, setType] = useState('password')
    const [ name, setName] = useState(props.username)
    const [ email, setEmail] = useState(props.email)
    const [ password, setPassword] = useState('')
    
    
    useEffect(() => {
    });
    
    const notifySuccess = (message) => toast.success(message);

    const notifyError = (message) => toast.error(message);

    async function save(){
        
        const id = localStorage.getItem('id')
        try{
            const response = await api.patch(`v1/users/${id}`, {
            user: {
                name,
                email,
                password
            }
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            props.updateEmail(response.data.email)
            props.updateUsername(response.data.name)
            notifySuccess("Seus dados foram atualizados")
        }catch(e){
            notifyError(e.response.data[0])
        }
    }

    return(
        <>
        <Sidebar />
        <div className="container-profile">
            <h1>Olá, {props.username}</h1>

            <div className="fields">
                <Input color="dark" holder={name} value={name} onChange={e => setName(e.target.value)}/>

                <div className="field-password">
                    <Input color="dark"  holder={"Atualizar senha"} value={password} onChange={e => setPassword(e.target.value)} type={type}/>
                   
                    <Button type="btn-sm" value={type === "password" ?  <Eye /> : <EyeBroken />} onClick={() => setType(type === "password" ? "text" : "password")}/>
                    
                </div>

                <Input color="dark" holder={email} value={email} onChange={e => setEmail(e.target.value)}/>

                <Button type="btn-sm" value="Atualizar" onClick={() => save()} />
            </div>
        </div>
        <ToastContainer />
        </>
    )
}



const mapStateToProps = state => ({
    username: state.user.username,
    email: state.user.email
})

const mapDispatchToProps = dispatch => bindActionCreators({updateEmail, updateUsername},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Profile)