import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = ({ setSection }) => {

    return (
        <div className='nav'>
            <h1>NY Times Reader</h1>
            <div className='home-button-container'>
                <Link to='/'>
                    <button className='home-button' onClick={() => setSection("home")}>HOME</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav;