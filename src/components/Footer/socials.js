import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Facebook from './icons/facebook.svg'
import Instagram from './icons/instagram.svg'
import Pinterest from './icons/pinterest.svg'
import Twitter from './icons/twitter.svg'
import YouTube from './icons/youtube.svg'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderTop: '1px solid #585a5d',
    borderBottom: '1px solid #585a5d',
    padding: '32px'
  },
  item: {
    width: '40px',
    height: '40px',
    padding: '0 16px'
  }
})

function Socials () {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.item)}>
        <a href='#'>
          <img src={YouTube} />
        </a>
      </div>
      <div className={css(styles.item)}>
        <a href='#'>
          <img src={Pinterest} />
        </a>
      </div>
      <div className={css(styles.item)}>
        <a href='#'>
          <img src={Facebook} />
        </a>
      </div>
      <div className={css(styles.item)}>
        <a href='#'>
          <img src={Twitter} />
        </a>
      </div>
      <div className={css(styles.item)}>
        <a href='#'>
          <img src={Instagram} />
        </a>
      </div>
    </div>
  )
}

export default Socials
