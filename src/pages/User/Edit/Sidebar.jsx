import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'


export default function Sidebar(){
   return(
        <div className="sidebar">
            <ul>
                <Link to="profile">
                    <li>   
                        Profile
                    </li>
                </Link>

                <Link to="favorites">
                    <li>
                        Favorites
                    </li>
                </Link>
            </ul>     
        </div>
    )
}