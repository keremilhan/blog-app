import React from 'react'
import './Navbar.scss'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../img/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="nav-left">
          <Link to="/"><img src={logo} alt="logo" /></Link>
          <Link to="about">About</Link>
        </div>
        <div className="nav-middle">
          <h2>Make Your Dreams Come True</h2>
        </div>
        <ul className='nav-right'>
          <li>
            <Link  to="login">Login</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )    
    
}

export default Navbar