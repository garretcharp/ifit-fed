import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import CardGrid from './components/CardGrid'
import Equipment from './components/Equipment'

import Footer from './components/Footer'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Nav />

      <div className='Content'>
        <Hero />
        <Reviews />
        <CardGrid />
        <Equipment />
      </div>

      <Footer />
    </div>
  )
}

export default App
