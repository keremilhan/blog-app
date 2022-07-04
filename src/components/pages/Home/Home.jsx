import React, {useEffect, useState} from 'react'
import { getDocs,collection } from 'firebase/firestore'
import {db} from '../../../firebase'
import BlogCard from '../../BlogCard/BlogCard'
import './Home.scss'

const Home = () => {

  const [postList, setPostList] = useState([])

  const postsCollectionRef = collection(db, "posts")

  useEffect(()=> {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getPosts()
  },[])

  return (
    <div id='home'>{postList.map((post) => {
      return <BlogCard key={post.id} post={post}/>
    })}</div>
  )
}

export default Home