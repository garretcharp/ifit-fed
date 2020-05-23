import React from 'react'
import Card from './card'
import { StyleSheet, css } from 'aphrodite'

import Treadmills from './images/treadmills.png'
import Bikes from './images/bikes.png'
import Ellipticals from './images/ellipticals.png'
import Strength from './images/strength.png'

const styles = StyleSheet.create({
  container: {
    padding: '50px 24px'
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  header: {
    opacity: '0.8',
    color: '#34383c',
    fontFamily: 'Proxima Nova Lt',
    fontSize: '24px',
    fontWeight: '600',
    letterSpacing: '0.3',
    lineHeight: '28px',
    textAlign: 'center'
  }
})

function Equipment () {
  return (
    <div className={css(styles.container)}>
      <h2 className={css(styles.header)}>
        Interested in our exciting iFit-enabled equipment?
      </h2>

      <div className={css(styles.items)}>
        <Card image={Treadmills} title={'Treadmills'}></Card>
        <Card image={Bikes} title={'Bikes'}></Card>
        <Card image={Ellipticals} title={'Ellipticals'}></Card>
        <Card image={Strength} title={'Strength'}></Card>
      </div>
    </div>
  )
}

export default Equipment
