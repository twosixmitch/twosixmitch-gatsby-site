import React from 'react'

import Layout from '@components/Layout'
import Page from '@components/Page'
import BlogNav from '@components/Blog/Nav'
import * as styles from './blog.module.scss'

export default function BlogIndex({ data }) {

  return (
    <Page title="blog">
      <div class="blog">
        <BlogNav />
        <section class="latest-posts">
          <h2>Latest posts</h2>
          <div class="posts-container">
          </div>
        </section>
      </div>
    </Page>
  )
}

BlogIndex.Layout = Layout
