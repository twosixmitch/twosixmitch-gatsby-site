import React from 'react'

import PostCard from '@components/Blog/PostCard'

const LatestPosts = ({posts}) => {
  return (
    <ol style={{ listStyle: `none` }}>
      { 
        posts.map(post => 
        {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}> 
              <PostCard post={ post } />
            </li>
          )
        }) 
      }
    </ol>
  )
}

/*
<li key={post.fields.slug}>
  <header>
      <h2>
        <Link to={post.fields.slug} itemProp="url">
          <span itemProp="headline">{title}</span>
        </Link>
      </h2>
      <small>{post.frontmatter.date}</small>
  </header>
</li>

*/

export default LatestPosts