import React from 'react'
import './Myblog.scss'
import {BiPlusMedical} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Myblog = () => {
  return (
    <div id='create-post-container'>
      <Link to='/create-post' id='create-post'><BiPlusMedical size={35} color='#443f59'/>Create New Post</Link>
      <p>You haven't posted anything yet.</p>
    </div>

  )
}

export default Myblog