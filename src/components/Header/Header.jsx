import React from 'react'
import './Header.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Header = () => 
    <header>
        <Link to="/">
            <div className="logo">
                Superime
            </div>
        </Link>

        <div className="links">
            <Button value="Registrar-se"/>

            <Button value="Entrar"/>
        </div>
    </header>

export default Header