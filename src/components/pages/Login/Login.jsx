import React from 'react'
import './Login.scss'
import logoLogin from '../../../img/logo_login.png'
import {BsGoogle} from 'react-icons/bs'
import {auth, provider} from '../../../firebase'
import { signInWithPopup } from 'firebase/auth'
import {useLogin} from '../../context/userContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();

  const {login, setLogin} = useLogin()

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
    localStorage.setItem('login', true)
    setLogin(true)
    toast.success("You are logged in!")
    setTimeout(() => {
      navigate('/',{
        replace: true
      })
    }, 1000);

  }

  console.log(login);

  return (
    <div className='wrapper'>
      <div className='login-container'>
        <div className="left">
          <img src={logoLogin} alt="" />
        </div>
        <div className="right">
            <button onClick={signInWithGoogle} type='submit'><BsGoogle/>Sign in with Google</button>
        </div>
      </div>
    </div>

  )
}

export default Login