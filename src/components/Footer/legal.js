import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderTop: '1px solid #585a5d',
    borderBottom: '1px solid #585a5d',
    padding: '24px'
  },
  languageSelector: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#ffffff',
    fontFamily: 'Proxima Nova Rg',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '0.5',
    lineHeight: '16px'
  },
  other: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: '1 1 auto',
    flexWrap: 'wrap'
  },
  items: {
    padding: '16px 24px',
    textDecoration: 'none',
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Proxima Nova Rg',
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '0.3',
    lineHeight: '16px',
    margin: '0'
  }
})

function Legal () {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.languageSelector)}>
        <p>Language</p>
        <svg width='24' height='24'>
          <rect width='24' height='24' fill='none' rx='0' ry='0' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill='#ffffff'
            d='M12 14.5929C11.9 14.5929 11.79 14.5729 11.69 14.5229L3.52002 10.8429C3.14002 10.6729 2.97004 10.2329 3.14004 9.85293C3.31004 9.47293 3.76003 9.30292 4.13003 9.47292L12 13.0129L19.87 9.47292C20.25 9.30292 20.69 9.47293 20.86 9.85293C21.03 10.2329 20.86 10.6729 20.48 10.8429L12.31 14.5229C12.21 14.5729 12.1 14.5929 12 14.5929Z'
          />
        </svg>
      </div>

      <div className={css(styles.other)}>
        <p className={css(styles.items)}>
          &copy; iFit.com. All Rights Reserved.
        </p>
        <a href='/' className={css(styles.items)}>
          Privacy Policy
        </a>
        <a href='/' className={css(styles.items)}>
          Terms of Use
        </a>
      </div>
    </div>
  )
}

export default Legal
