import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import './BlogCard.scss'

const BlogCard = ({post}) => {
  return (
    <div id='blog-card-container'>
        <h1>{post.title}</h1>
        <p>{post.postText}</p>
        <div id="blog-card-foooter">
            <div id="top-footer">
                <p>{post.tags}</p>
                <p>{post.today}</p>
            </div>
            <div id="bottom-footer">
                <div id="icons">
                    <p><AiFillHeart size={20}/></p>
                    <p><FaComment size={19}/></p>
                </div>

                <p>by {post.author.name}</p>
            </div>
        </div>

    </div>
  )
}

export default BlogCard