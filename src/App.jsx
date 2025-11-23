import { Navbar, Welcome, Dock } from './components'
import React from 'react'
import './App.css'

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  )
}

export default App