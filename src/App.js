import React from 'react'
import ProductNav from './components/Nav/product'
import MainNav from './components/Nav/main'
import Hero from './components/Hero'
import './App.css'

function App () {
  return (
    <div className='App'>
      <div className='Navigation'>
        <ProductNav />
        <MainNav />
      </div>

      <div className='Content'>
        <Hero />
      </div>
    </div>
  )
}

export default App
