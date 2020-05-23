import React from 'react'
import Card from './card'
import { StyleSheet, css } from 'aphrodite'

import Ireland from './images/ireland.png'
import AvatarIreland from './images/avatar-ireland.png'
import Performance from './images/performance.png'
import AvatarPerformance from './images/avatar-performance.png'
import Pulls from './images/pulls.png'
import AvatarPulls from './images/avatar-pulls.png'
import Toned from './images/toned.png'
import AvatarToned from './images/avatar-toned.png'
import Race from './images/race.png'
import AvatarRace from './images/avatar-race.png'
import HIIT from './images/hiit.png'
import AvatarHIIT from './images/avatar-hiit.png'
import PowerStroke from './images/power-stroke.png'
import AvatarPowerStroke from './images/avatar-power-stroke.png'
import Shred from './images/shred.png'
import AvatarShred from './images/avatar-shred.png'

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
        image={Pulls}
        avatar={AvatarPulls}
        details={{ time: '44:13', distance: '9,948 M' }}
      />
      <Card
        title={'20 Minutes to Toned'}
        image={Toned}
        avatar={AvatarToned}
        playlist={{ amount: 12 }}
      />
      <Card
        title={'Charles Race, Boston, Massachusetts'}
        image={Race}
        avatar={AvatarRace}
        details={{ time: '36:22', distance: '8,648 M' }}
      />
      <Card
        title={'Full-Body HIIT Series'}
        image={HIIT}
        avatar={AvatarHIIT}
        playlist={{ amount: 12 }}
      />
      <Card
        title={'Kafue River, Zambia-Power Stroke Pyramid'}
        image={PowerStroke}
        avatar={AvatarPowerStroke}
        details={{ time: '22:22', distance: '4,660 M' }}
      />
      <Card
        title={'Shred & Burn Series'}
        image={Shred}
        avatar={AvatarShred}
        playlist={{ amount: 16 }}
      />
    </div>
  )
}

export default Grid
