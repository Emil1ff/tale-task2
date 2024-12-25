import { useState } from 'react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main'
import './App.css'
import { Footer } from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Header/>
     < Main/> 
     < Footer/>
    </>
  )
}

export default App
