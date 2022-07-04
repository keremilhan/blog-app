import React from 'react'
import './CreatePost.scss'
import { useState, useEffect } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db,auth} from '../../../firebase'
import {useNavigate} from 'react-router-dom'
import {useLogin} from '../../context/userContext'

const CreatePost = () => {

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;



  const {login, setLogin} = useLogin()

  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [postText, setPostText] = useState("")

  const postsCollectionRef = collection(db, "posts")

  const navigate = useNavigate();

  const createPost = async () =>  {
    await addDoc(postsCollectionRef, {title, tags, postText, today, author:{name: auth.currentUser.displayName , id: auth.currentUser.uid, profilePhoto: auth.currentUser.photoURL }})
    navigate('/', {replace:true})
  }

  // useEffect(() => {
  //   console.log(login);
  //   if(!login){
  //     console.log("navigate");
  //     navigate("/login", {replace:true})
  //   }

  // },[])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    createPost()
  }

  return (
    <div id='wrapper-container'>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title...' required />
        <input value={tags} onChange={(e) => setTags(e.target.value)} type="text" placeholder='Tags...' required/>
        <textarea value={postText} onChange={(e) => setPostText(e.target.value)} cols="30" rows="10" placeholder='Post...' required></textarea>
        <div id="buttons">
          <button type='submit'>Upload Image</button>
          <button type='submit'>Post</button>
        </div>

      </form>

    </div>
  )
}

export default CreatePost