import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {

    return (
        <div className='nav'>
            <h1>NY Times Reader</h1>
            <div className='home-button-container'>
                <Link to='/'>
                    <button className='home-button'>HOME</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav;