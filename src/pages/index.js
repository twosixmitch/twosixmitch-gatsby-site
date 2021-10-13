import * as React from "react"
import { graphql } from "gatsby"

import Layout from '@components/Layout'
import Page from '@components/Page'
import LatestPosts from '@components/LatestPosts'
import { StaticImage } from "gatsby-plugin-image"

import * as styles from './index.module.scss';

export default function IndexPage ({ data }) {
  
  const posts = data.allMarkdownRemark.nodes

  return (
    <Page title="Home">
      <div className={styles.profile}>
        <div class={styles.profile__title}>
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.png"
            width={150}
            height={150}
            quality={95}
            alt="Profile picture" />
          <h1>Welcome!<br />I'm Mitch</h1>
        </div>
        <div class={styles.profile__bio}>
          <p>I am a software developer born and raised in New Zealand.</p>
          <p>I created this website to talk about things I know and some things I don't.</p>
        </div>
      </div>
      <section class="section latest-posts">
        <h2>Latest posts</h2>
        <div class="posts-container">
          <LatestPosts posts={posts}/>
        </div>
        <div class={styles.viewMore}>
          <a class="tag-button" href="/blog">View all</a>
        </div>
      </section> 
    </Page>
  )
}

IndexPage.Layout = Layout

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`