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
            <Link to="/user">
                <Button value="Registrar-se"/>
            </Link>

            <Link to="/user">
                <Button value="Entrar"/>
            </Link>
        </div>
    </header>

export default Header