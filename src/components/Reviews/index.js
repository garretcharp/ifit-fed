import React, { useEffect, createRef, useState } from 'react'
import Slider from './slider'

import MashableLogo from './logos/mashable.svg'
import WiredLogo from './logos/wired.svg'

import { StyleSheet, css } from 'aphrodite'

const reviewStyles = StyleSheet.create({
  container: {
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 1 2 rgba(46, 49, 52, 0.4)',
    borderRadius: '4px',
    width: '300px',
    flex: '0 0 auto',
    '@media (min-width: 1000px)': {
      width: '440px'
    },
    padding: '12px',
    textAlign: 'center'
  }
})

const ReviewItem = React.forwardRef(({ image, text, onChange }, ref) => {
  function updateWidth () {
    if (ref && ref.current && onChange) onChange(ref.current.offsetWidth)
  }

  useEffect(() => {
    if (ref && ref.current && onChange) {
      onChange(ref.current.offsetWidth)
      window.addEventListener('resize', updateWidth)
      return () => window.removeEventListener('resize', updateWidth)
    }
  }, [ref])

  return (
    <div ref={ref} className={css(reviewStyles.container)}>
      <img src={image} />
      <p>{text}</p>
    </div>
  )
})

function Reviews (props) {
  const ref = createRef()
  const [reviewWidth, setReviewWidth] = useState(0)

  return (
    <Slider itemWidth={reviewWidth}>
      <ReviewItem
        ref={ref}
        onChange={value => {
          if (reviewWidth !== value) {
            setReviewWidth(value)
          }
        }}
        image={MashableLogo}
        text={
          '"You focus on putting in the work, and the technology handles the rest."'
        }
      ></ReviewItem>
      <ReviewItem
        image={WiredLogo}
        text={
          '"Literally transports you from home to wherever you choose to run."'
        }
      ></ReviewItem>
      <ReviewItem
        image={MashableLogo}
        text={'"Breaths new life into a tired, old running routine."'}
      ></ReviewItem>
      <ReviewItem
        image={WiredLogo}
        text={'"Something about running, and going wherever you want."'}
      ></ReviewItem>
      <ReviewItem
        image={MashableLogo}
        text={
          '"I am running out of ideas for quotes if you could not tell." *pun intended*'
        }
      ></ReviewItem>
      <ReviewItem
        image={WiredLogo}
        text={'"This is a quote about running."'}
      ></ReviewItem>
      <ReviewItem
        image={MashableLogo}
        text={'"This is another quote."'}
      ></ReviewItem>
      <ReviewItem
        image={WiredLogo}
        text={'"One last quote just to be safe."'}
      ></ReviewItem>
    </Slider>
  )
}

export default Reviews
