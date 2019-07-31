import React from 'react'
import './Header.css'
import Button from '../Button/Button'

const Header = () => 
    <header>
        <div className="logo">
            Superime
        </div>

        <div className="links">
            <Button value="Registrar-se"/>

            <Button value="Entrar"/>
        </div>
    </header>

export default Header