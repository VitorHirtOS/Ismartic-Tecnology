import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Normalize/Normalize.css'
import Header from './Components/Header/header'
import Banner from './Components/Banner/banner'

function App() {
  return (
    <>
      <Header/>
      <Banner/>
    </>
  )
}

export default App
