import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavComponent from './components/NavComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavComponent/>
      <p className="read-the-docs">
        Mainpage
      </p>
    </>
  )
}

export default App
