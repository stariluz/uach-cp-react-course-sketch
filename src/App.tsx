import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableContent from './components/TableContent';

function App() {
  const [count, setCount] = useState(0)
  const [band, setBand] = useState(false);
  setTimeout(() => {
    setBand(!band);
  }, 5000)
  const numbers = Array(10).fill(0).map((value, index) => {
    return <li key={`numbersArray_item_${index}`}>{index + 1}</li>
  })
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-4">
        {
          band ?
            'ola!' :
            'adiós'
        }
      </div>
      <div className="mt-4">
        <ul>
          {numbers}
        </ul>
      </div>
      <TableContent />
    </>
  )
}

export default App
