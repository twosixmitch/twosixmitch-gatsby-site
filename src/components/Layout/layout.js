import * as React from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'
import * as styles from './Layout.module.scss'

const Layout = ({ location, title, children }) => {
  const isRootPath = location.pathname === `${__PATH_PREFIX__}/`

  return (
    <>
      <div className={styles.global__container} data-is-root-path={isRootPath}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout