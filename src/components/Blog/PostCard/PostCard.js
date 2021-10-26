import React from 'react'

import * as styles from "./PostCard.module.scss"

const PostCard = ({post}) => 
{
  return (
    <div className={styles.postcard}>
      <PostCardImage post={post}/>
      <PostCardDetails post={post}/>
    </div>
  )
}

const PostCardImage = ({ post }) => {
  return (
    <div className={ styles.postcard__image }>
      <a href={ post.url }>
        <img src={ post.image } alt={ post.imageDesc }/>
      </a>
    </div>
  )
}

const PostCardDetails = ({ post }) => {
  return (
    <div class="details">
        <div class="title">
          <a href={ post.url }>{ post.title }</a>
        </div>
        <div class="meta">
          <PostDate date={ post.date }/>
          <Seperator />
          <PostReadTime time={ post.readTime } />
          <PostTags />          
        </div>
        <div class="description">{ post.description }</div>
      </div>
  )
}

const PostDate = ({ date }) => {
  return (<time class="date">{ date }</time>)
}

const Seperator = () => {
  return (<div class="separator">·</div>)
}

const PostReadTime = ({ time }) => {
  return (<div class="read-time">{ time }</div>)
}

const PostTags = ({ tags }) => {
  return (
    <div class="tags">       
    </div>
  )
}

export default PostCard