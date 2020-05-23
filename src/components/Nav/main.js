import React, { useState, useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Logo from './logo.svg'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffffff',
    padding: '12px 24px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    height: '100%',
    '@media (max-width: 1000px)': {
      display: 'none'
    }
  },
  list: {
    display: 'inline',
    verticalAlign: 'middle',
    margin: '0',
    padding: '0'
  },
  listItem: {
    display: 'inline',
    padding: '16px 40px',
    float: 'left',
    lineHeight: '14px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
    fontSize: '14px',
    fontFamily: 'Proxima Nova Lt',
    '@media (max-width: 1200px)': {
      fontSize: '12px',
      lineHeight: '12px',
      padding: '12px 34px'
    },
    '@media (max-width: 800px)': {
      padding: '10px 20px'
    }
  },
  mobileMenu: {
    display: 'none',
    '@media (max-width: 1000px)': {
      display: 'block'
    },
    ':hover': {
      cursor: 'pointer'
    },
    padding: '10px 0',
    userSelect: 'none',
    border: 'none',
    backgroundColor: 'transparent'
  },
  mobileContainer: {
    borderTop: '1px solid #d5d6d6',
    margin: '0',
    padding: '0'
  },
  mobileListItem: {
    display: 'block',
    borderBottom: '1px solid #d5d6d6',
    padding: '16px 24px',
    margin: '0',
    fontSize: '16px',
    lineHeight: '16px'
  },
  link: {
    display: 'inline-block',
    color: 'rgba(46, 49, 52, 0.8)',
    textDecoration: 'none'
  },
  button: {
    borderRadius: '4px',
    backgroundColor: '#0069D2',
    padding: '10px 16px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    lineHeight: '16px',
    letterSpacing: 0.5,
    fontWeight: 700,
    fontSize: '14px',
    fontFamily: 'Proxima Nova Rg',
    color: '#ffffff'
  }
})

const NavLinks = ({ className }) => (
  <ul className={css(styles.list)}>
    <li className={className}>
      <a className={css(styles.link)} href='/'>
        Exercise
      </a>
    </li>
    <li className={className}>
      <a className={css(styles.link)} href='/'>
        Nutrition
      </a>
    </li>
    <li className={className}>
      <a className={css(styles.link)} href='/'>
        Activity
      </a>
    </li>
    <li className={className}>
      <a className={css(styles.link)} href='/'>
        Sleep
      </a>
    </li>
  </ul>
)

function MainNav () {
  const [open, setOpen] = useState(false)

  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 650

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  return (
    <div>
      <div className={css(styles.container)}>
        <div className={css(styles.logo)}>
          <img alt='Logo' src={Logo} />
        </div>

        <div>
          {width > breakpoint ? (
            <NavLinks className={css(styles.listItem)} />
          ) : (
            <button
              onClick={() => {
                setOpen(!open)
              }}
              className={css(styles.mobileMenu)}
            >
              Menu
            </button>
          )}
        </div>

        <div>
          <a className={css(styles.button)} href='/'>
            Sign Up
          </a>
        </div>
      </div>

      {open && width <= breakpoint ? (
        <div className={css(styles.mobileContainer)}>
          <NavLinks className={css(styles.mobileListItem)} />
        </div>
      ) : null}
    </div>
  )
}

export default MainNav
