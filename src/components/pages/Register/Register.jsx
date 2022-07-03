import React,{useState} from 'react'
import logoLogin from '../../../img/logo_login.png'
import { useUser } from '../../context/userContext'


const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user, setUser} = useUser()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(name)
  }
  return (
    <div className='wrapper'>
      <div className='login-container'>
        <div className="left">
          <img src={logoLogin} alt="" />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Name' />
            {name}
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email'/>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password'/>
            <button type='submit'>REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register