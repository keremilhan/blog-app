import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.scss'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../img/logo.png'
import { useLogin } from '../context/userContext'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import {FaUserAlt} from 'react-icons/fa'
import toast from 'react-hot-toast'




const Navbar = () => {
  const navigate = useNavigate()

  const userSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
      toast.success("Logged out succesfully...");
      localStorage.setItem('login', false)
      setLogin(false)
    } catch (err) {
      toast.error(err.message);
    }
  };


  const {login, setLogin} = useLogin();
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
          {!login
           ?<li>
              <Link  to="login">Login</Link>
            </li> 
            :<>
            <li>
              <Link  to="myblog">My Blog</Link>
            </li>                         
            <li>
              <Link  to="profile">Profile</Link>
            </li>          
            <li>
              <Link  to="create-post">Create Post</Link>
            </li>          
            <li>
              <Link onClick={userSignOut}  to="profile">Logout</Link>
            </li>          
            
            </>       
          }

        </ul>
      </nav>
      <Outlet />
    </>
  )    
    
}

export default Navbar