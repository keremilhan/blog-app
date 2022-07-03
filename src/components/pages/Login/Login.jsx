import React from 'react'
import './Login.scss'
import logoLogin from '../../../img/logo_login.png'


const Login = () => {


  return (
    <div className='wrapper'>
      <div className='login-container'>
        <div className="left">
          <img src={logoLogin} alt="" />
          <p className='italic'>Don't have an account?</p>
          <p className='italic underlined'>Sign Up</p>
        </div>
        <div className="right">
          <form>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button type='submit'>LOGIN</button>
          </form>
          <p>Forgot Password?</p>
        </div>
      </div>
    </div>

  )
}

export default Login