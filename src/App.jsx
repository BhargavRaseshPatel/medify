import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import TopHeader from './components/TopHeader.jsx'
import Header from './components/Header.jsx'
import './App.css'
import Home from './screen/Home.jsx'
import AskedQuestion from './components/HomeComponents/AskedQuestion.jsx'
import AppDownload from './components/HomeComponents/AppDownload.jsx'
import Footer from './components/HomeComponents/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopHeader />
      <Header />
      <Home />
      <AskedQuestion />
      <AppDownload />
      <Footer />
    </>
  )
}

export default App
