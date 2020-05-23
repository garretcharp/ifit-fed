import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: '24px'
  }
})

function Socials () {
  return (
    <div className={css(styles.container)}>
      <div>CARD 1</div>
      <div>CARD 2</div>
      <div>CARD 3</div>
      <div>CARD 4</div>
      <div>CARD 5</div>
    </div>
  )
}

export default Socials
