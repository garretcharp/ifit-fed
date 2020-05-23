import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  list: {
    backgroundColor: '#ffffff',
    padding: '0',
    margin: '0',
    width: '100%',
    borderBottom: '1px solid #d5d6d6'
  },
  listItem: {
    display: 'inline',
    padding: '16px 40px',
    borderRight: '1px solid #d5d6d6',
    float: 'left',
    lineHeight: '14px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
    fontSize: '14px',
    fontFamily: 'Proxima Nova Lt',
    '@media (max-width: 600px)': {
      fontSize: '12px',
      lineHeight: '12px',
      padding: '12px 36px'
    },
    '@media (max-width: 400px)': {
      fontSize: '10px',
      lineHeight: '10px',
      padding: '8px 24px'
    }
  },
  link: {
    display: 'inline-block',
    color: 'rgba(46, 49, 52, 0.8)',
    textDecoration: 'none'
  }
})

function ProductNav () {
  return (
    <div className={css(styles.container)}>
      <ul className={css(styles.list)}>
        <li className={css(styles.listItem)}>
          <a className={css(styles.link)} href='/'>
            BLOG
          </a>
        </li>
        <li className={css(styles.listItem)}>
          <a className={css(styles.link)} href='/'>
            NOURISH
          </a>
        </li>
        <li className={css(styles.listItem)}>
          <a className={css(styles.link)} href='/'>
            SHOP
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ProductNav
