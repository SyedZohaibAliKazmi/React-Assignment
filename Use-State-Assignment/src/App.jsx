import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'

function App() {
  const [num, setNum] = useState( 0);


  return (
    <div>
      <h2>Use State with Number</h2>
      <h1>Count '{num}'</h1>
      <Button  onClick={() => setNum(num +1)} />
      

    </div>
  )
}

export default App
