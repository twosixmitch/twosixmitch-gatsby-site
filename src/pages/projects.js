import React from "react"
import Layout from '../components/Layout'
import ComingSoon from '../components/ComingSoon/ComingSoon';
import * as styles from './projects.module.scss';

export default function ProjectsIndex({ data }) {

  return (
    <div className="projects">
      <ComingSoon />
    </div>
  )
}

ProjectsIndex.Layout = Layout