import React from 'react'

import instagram from '@images/instagram.png';
import github    from '@images/github.png';
import facebook  from '@images/facebook.png';
import youtube   from '@images/youtube.png';

import * as styles from "./Footer.module.scss"

const Footer = () => 
{
  return (
    <footer>
      <div className={styles.links}>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/twosixmitch">
          <img src={instagram} alt="link to Instagram" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/twosixmitch">
          <img src={github} alt="link to GitHub" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/twosixmitch">
          <img src={facebook} alt="link to facebook" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCOVyGxIH1HwABb-SOkX6R_w">
          <img src={youtube} alt="link to youtube" />
        </a>
      </div>
    </footer>
  )
}

export default Footer