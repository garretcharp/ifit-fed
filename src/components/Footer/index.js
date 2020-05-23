import React from 'react'
import Links from './links'
import Socials from './socials'
import Legal from './legal'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2 5 rgba(0, 0, 0, 0.05)',
    backgroundColor: '#2e3134'
  }
})

function Footer () {
  return (
    <div className={css(styles.container)}>
      <Links />
      <Socials />
      <Legal />
    </div>
  )
}

export default Footer
