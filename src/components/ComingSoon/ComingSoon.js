import React from 'react'

import * as styles from "./ComingSoon.module.scss"

const ComingSoon = () => 
{
  return (
    <div className={styles.comingSoon}>
      <div className={styles.comingSoon__icon}>🚧</div>
      <div className={styles.comingSoon__text}>Under Construction</div> 
    </div>
  )
}

export default ComingSoon