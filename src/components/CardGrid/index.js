import React from 'react'
import Card from './card'
import { StyleSheet, css } from 'aphrodite'

import Ireland from './images/ireland.png'
import AvatarIreland from './images/avatar-ireland.png'
import Performance from './images/performance.png'
import AvatarPerformance from './images/avatar-performance.png'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: '24px'
  }
})

function Grid () {
  return (
    <div className={css(styles.container)}>
      <Card
        title={'Lake Inniscarra, Ireland-Pyramid'}
        image={Ireland}
        avatar={AvatarIreland}
        details={{ time: '30:53', distance: '6,248 M' }}
        viewAll={true}
      />
      <Card
        title={'Performance Series'}
        image={Performance}
        avatar={AvatarPerformance}
        playlist={{ amount: 9 }}
      />
      <Card
        title={'Slow Pulls and Fast Intervals'}
        image={Ireland}
        avatar={AvatarIreland}
        details={{ time: '44:13', distance: '9,948 M' }}
      />
      <Card
        title={'20 Minutes to Toned'}
        image={Ireland}
        avatar={AvatarIreland}
        playlist={{ amount: 12 }}
      />
      <Card
        title={'Charles Race, Boston, Massachusetts'}
        image={Ireland}
        avatar={AvatarIreland}
        details={{ time: '36:22', distance: '8,648 M' }}
      />
      <Card
        title={'Full-Body HIIT Series'}
        image={Ireland}
        avatar={AvatarIreland}
        playlist={{ amount: 12 }}
      />
      <Card
        title={'Kafue River, Zambia-Power Stroke Pyramid'}
        image={Ireland}
        avatar={AvatarIreland}
        details={{ time: '22:22', distance: '4,660 M' }}
      />
      <Card
        title={'Shred & Burn Series'}
        image={Ireland}
        avatar={AvatarIreland}
        playlist={{ amount: 16 }}
      />
    </div>
  )
}

export default Grid
