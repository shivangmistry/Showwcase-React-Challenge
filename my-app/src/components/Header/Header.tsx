import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

const Header: React.FC = () => {
    return (
        <header>
            <div className='headerDiv'>
                <img src='https://static.wixstatic.com/media/553d6a_ecfd3ef0ea7646a5b8739bb4c531f357~mv2.png' alt='logo' className='logo' />
                <nav>
                    <NavLink activeClassName='active' to='/home'>
                        Home
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
