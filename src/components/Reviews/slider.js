import React, { useState, createRef, useLayoutEffect, useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'

const arrowStyle = StyleSheet.create({
  container: {
    width: '40px',
    height: '40px',
    backgroundColor: '#000',
    borderRadius: '50%',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '100'
  },
  arrow: {
    width: '24px',
    height: '24px',
    padding: '8px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      cursor: 'pointer'
    },
    userSelect: 'none'
  }
})

function Arrow ({ text, onClick }) {
  return (
    <div className={css(arrowStyle.container)} onClick={onClick}>
      <span className={css(arrowStyle.arrow)}>{text}</span>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    minHeight: '250px',
    height: '20vh',
    padding: '12px 24px',
    backgroundColor: '#f4f5f7'
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flex: '1 1 0px',
    justifyContent: 'space-evenly',
    overflowX: 'hidden'
  }
})

function Slider (props) {
  const [activeItem, setActive] = useState(0)

  const ref = createRef()
  const [containerWidth, setContainerWidth] = useState(0)
  const [visibleElements, setVisibleElements] = useState(0)

  useEffect(() => {
    if (ref.current && ref.current.offsetWidth !== containerWidth) {
      setContainerWidth(ref.current.offsetWidth)
      setVisibleElements(Math.round(ref.current.offsetWidth / props.itemWidth))
    }
  }, [ref.current])

  useEffect(() => {
    if (containerWidth) {
      setVisibleElements(Math.round(containerWidth / props.itemWidth))
    }
  }, [props.itemWidth])

  return (
    <div className={css(styles.container)} ref={ref}>
      <Arrow
        onClick={() => {
          if (activeItem === 0) setActive(props.children.length - 1)
          else setActive(activeItem - 1)
        }}
        text={'<'}
      />
      <div className={css(styles.items)}>
        {props.children.map((elem, index) => {
          if (
            index >= activeItem - Math.floor(visibleElements / 2) &&
            index <= activeItem + Math.floor(visibleElements / 2)
          ) {
            return elem
          } else return null
        })}
      </div>
      <Arrow
        onClick={() => {
          if (activeItem === props.children.length - 1) setActive(0)
          else setActive(activeItem + 1)
        }}
        text={'>'}
      />
    </div>
  )
}

export default Slider
