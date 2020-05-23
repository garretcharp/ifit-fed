import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    borderTop: '1px solid #585a5d',
    borderBottom: '1px solid #585a5d',
    padding: '16px'
  }
})

function Socials () {
  return (
    <div className={css(styles.container)}>
      <div>YT</div>
      <div>PIN</div>
      <div>FB</div>
      <div>TWEET</div>
      <div>INSTA</div>
    </div>
  )
}

export default Socials
