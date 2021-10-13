import * as React from "react"

import Layout from '@components/Layout'
import Page from '@components/Page'
import * as styles from './404.module.scss'

export default function NotFoundPage ({ data, location }) {

return (
    <Page  title="404: Not Found">
      <div className={styles.missing__header}>
          <h1>404</h1>
          <p>PAGE NOT FOUND</p>
      </div>
      <div class={styles.missing__info}>
          <p>please try reloading or click <a href="/">here</a> to return home</p>
      </div>
    </Page>
  )
}

NotFoundPage.Layout = Layout