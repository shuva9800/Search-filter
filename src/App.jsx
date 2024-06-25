import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SortableTable from './components/SortableTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SortableTable/>
    </div>
  )
}

export default App
