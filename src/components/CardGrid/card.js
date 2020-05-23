import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Distance from './details/distance.svg'
import Timer from './details/timer.svg'
import Playlist from './details/playlist.svg'

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
    width: '100%'
  },
  cardTitle: {
    color: '#2e3134',
    fontFamily: 'Proxima Nova Rg',
    fontSize: '16px',
    fontWeight: '700',
    letterSpacing: '0.3',
    lineHeight: '18px',
    padding: '0',
    margin: '0'
  },
  avatar: {
    borderRadius: '4px',
    width: '28px',
    height: '28px',
    padding: '8px'
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  detailsContainer: {
    paddingBottom: '20px'
  },
  detailsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  detail: {
    padding: '0 10px 0 4px',
    margin: '0'
  },
  detailsLink: {
    color: '#0069d2',
    fontFamily: 'Proxima Nova Rg',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '0.5',
    lineHeight: '16px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    paddingTop: '12px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 12px'
  },
  playlistOverlay: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: '5px',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  image: {
    position: 'relative'
  },
  workoutMetric: {
    color: '#ffffff'
  }
})

function Card ({
  image,
  title,
  avatar,
  details: { time, distance } = {},
  viewAll,
  playlist: { amount } = {}
}) {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.image)}>
        <img className={css(styles.cardImage)} src={image} />
        {amount && amount > 0 && (
          <div className={css(styles.playlistOverlay)}>
            <p className={css(styles.detail, styles.workoutMetric)}>{amount}</p>
            <p className={css(styles.detail, styles.workoutMetric)}>Workouts</p>
            <img src={Playlist} />
          </div>
        )}
      </div>
      <div className={css(styles.content)}>
        <div className={css(styles.titleRow)}>
          <h3 className={css(styles.cardTitle)}>{title}</h3>
          <img className={css(styles.avatar)} src={avatar} />
        </div>
        {time && distance && (
          <div className={css(styles.detailsContainer)}>
            <div className={css(styles.detailsRow)}>
              <img src={Timer} />
              <p className={css(styles.detail)}>{time}</p>
              <img src={Distance} />
              <p className={css(styles.detail)}>{distance}</p>
            </div>

            {viewAll && (
              <a href='#' className={css(styles.detailsLink)}>
                View Details
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
