import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    margin: '24px',
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0px 1px 2px rgba(46, 49, 52, 0.4)',
    borderRadius: '4px',
    '@media (min-width: 1200px)': {
      width: '20%'
    },
    '@media (min-width: 800px and max-width: 1199px)': {
      width: '30%'
    }
  },
  cardImage: {
    width: '100%',
    height: '100%'
  },
  cardTitle: {
    opacity: '0.8',
    color: '#2e3134',
    fontFamily: 'Proxima Nova Rg',
    fontSize: '24px',
    fontWeight: '700',
    letterSpacing: '0.3',
    lineHeight: '28px',
    textAlign: 'center'
  }
})

function Card ({ image, title }) {
  return (
    <div className={css(styles.container)}>
      <img alt='Equipment' className={css(styles.cardImage)} src={image} />
      <h3 className={css(styles.cardTitle)}>{title}</h3>
    </div>
  )
}

export default Card
