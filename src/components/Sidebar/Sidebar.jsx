import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'


export default function Sidebar(){
   return(
        <div className="sidebar">
            <ul>
                <Link to="profile">
                    <li>   
                        Perfil
                    </li>
                </Link>

                <Link to="favorites">
                    <li>
                        Favoritos
                    </li>
                </Link>
            </ul>     
        </div>
    )
}