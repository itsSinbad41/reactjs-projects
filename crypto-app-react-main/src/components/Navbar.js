import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1> Dashboard <span className='purple'>Project</span></h1>
                <FaCoins className='icon' />
            </div>
        </Link>
    )
}

export default Navbar
