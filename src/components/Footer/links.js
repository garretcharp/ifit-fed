import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: '48px 24px'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 32px',
    '@media (max-width: 400px)': {
      flex: '1 1 0px'
    }
  },
  sectionHeader: {
    color: '#ffffff',
    fontFamily: 'Proxima Nova Rg',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '0.5',
    lineHeight: '16px',
    margin: '0'
  },
  sectionLink: {
    opacity: '0.8',
    color: '#ffffff',
    fontFamily: 'Proxima Nova Lt',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.3',
    lineHeight: '16px',
    textDecoration: 'none',
    paddingTop: '16px'
  }
})

function Links () {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.section)}>
        <h5 className={css(styles.sectionHeader)}>Company</h5>
        <a className={css(styles.sectionLink)} href='/'>
          About
        </a>
        <a className={css(styles.sectionLink)} href='/'>
          Contact Us
        </a>
        <a className={css(styles.sectionLink)} href='/'>
          Careers
        </a>
      </div>
      <div className={css(styles.section)}>
        <h5 className={css(styles.sectionHeader)}>Account</h5>
        <a className={css(styles.sectionLink)} href='/'>
          Login
        </a>
        <a className={css(styles.sectionLink)} href='/'>
          Create Account
        </a>
      </div>
      <div className={css(styles.section)}>
        <h5 className={css(styles.sectionHeader)}>Support</h5>
        <a className={css(styles.sectionLink)} href='/'>
          Help Center
        </a>
        <a className={css(styles.sectionLink)} href='/'>
          Accessibility
        </a>
      </div>
    </div>
  )
}

export default Links
