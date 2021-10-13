import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import config from '../utils/config'

const PageTemplate = ({ data, location }) => {
  
  return (
    <Layout location={location} title={config.siteTitle}>
      
     
    </Layout>
  )
}

export default PageTemplate

