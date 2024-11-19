import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Kieran sucks this much {count}
        </button>
      </div>
    </>
  )
}

export default App
