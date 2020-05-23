import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Nav />

      <div className='Content'>
        <Hero />
        <Reviews />
      </div>
    </div>
  )
}

export default App
