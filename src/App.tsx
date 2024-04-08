import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LexicalTextarea from './apps/components/Common/LexicalTextarea'
import Navbar from './apps/components/Navbar'
import Homepage from './apps/components/Homepage'
import Header from './apps/components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Homepage/>

    </>
  )
}

export default App
