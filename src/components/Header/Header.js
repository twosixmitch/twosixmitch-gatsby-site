import React from 'react'
import * as styles from "./Header.module.scss"

const Header = () => {
  return (
    <header>
      <nav >
        <div className={styles.container}>
          <div className={styles.brand}>
            <a href="/">👨🏻‍💻 Mitchell Duncan</a>
          </div>
          <div class={styles.links}>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header