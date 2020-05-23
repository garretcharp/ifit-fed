import React from 'react'
import Background from './background.png'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(85vh - 100px)',
    background: `linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21)), url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'border-box',
    backgroundPosition: 'center',
    padding: '0 36px'
  },
  heroText: {
    color: '#ffffff',
    fontFamily: 'Proxima Nova Lt',
    fontSize: '22px',
    lineHeight: '40px',
    fontWeight: '600',
    letterSpacing: '1',
    textAlign: 'center',
    '@media (min-width: 600px)': {
      fontSize: '32px',
      lineHeight: '50px'
    },
    '@media (min-width: 900px)': {
      fontSize: '52px',
      lineHeight: '70px'
    },
    '@media (min-width: 1200px)': {
      fontSize: '72px',
      lineHeight: '90px'
    },
    margin: '0',
    padding: '0'
  },
  ctaButton: {
    backgroundColor: '#0069d2',
    borderRadius: '4px',
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.24), 0 0 1px rgba(0, 0, 0, 0.12)',
    color: '#ffffff',
    fontFamily: 'Proxima Nova Lt',
    fontSize: '12px',
    lineHeight: '12px',
    fontWeight: '600',
    letterSpacing: '1',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '14px 32px',
    '@media (min-width: 900px)': {
      fontSize: '14px',
      lineHeight: '14px',
      padding: '21px 82px'
    },
    marginTop: '77px'
  }
})

function Hero () {
  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.heroText)}>
        The best personal training, right in your own home
      </h1>
      <a href='/' className={css(styles.ctaButton)}>
        Join iFIT Coach
      </a>
    </div>
  )
}

export default Hero
