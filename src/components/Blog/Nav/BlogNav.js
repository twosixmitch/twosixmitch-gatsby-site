import React from 'react'

import * as styles from "./BlogNav.module.scss"

const BlogNav = () => 
{
  return (
    <div className={styles.blog__header}>
      <ul>
        <li><a href="/blog">All</a></li>
        <li><a href="/blog/life">🍎 Life</a></li>
        <li><a href="/blog/coding">💻  Coding</a></li>
        <li><a href="/blog/languages">🌍  Languages</a></li>
      </ul>
    </div>
  )
}

export default BlogNav