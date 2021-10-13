import * as React from 'react'
import Seo from '../Seo';
import Helmet from 'react-helmet'
import config from '../../utils/config'

import * as styles from './Page.module.scss';

const Page = ({title, children}) => {
  return (
    <> 
      <Helmet title={config.siteTitle} />
      <Seo title={title} />
      <div className={styles.page}>
        {children}
      </div>
    </>
  )
}

export default Page