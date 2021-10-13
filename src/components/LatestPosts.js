import React from 'react'
import { Link } from "gatsby"

const LatestPosts = ({posts}) => {
  return (
    <ol style={{ listStyle: `none` }}>
      { 
        posts.map(post => 
        {
          const title = post.frontmatter.title || post.fields.slug
          return (
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
          )
        }) 
      }
    </ol>
  )
}

export default LatestPosts