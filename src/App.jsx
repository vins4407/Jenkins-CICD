import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>this is modified version 1</h1>
      <h1>[ Vite + React ] App</h1>
      <h1> CICD Pipeline using Jenkins/AWS/Docker/NodeJs/ </h1>
      <h1>Vinayak kesharwani</h1>

      
    </>
  )
}

export default App
