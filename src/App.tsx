import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Events from './components/Events'

function App() {
  const [search, setSearch] = useState("")
  const handleEventSearch = (search: string) => {
    setSearch(search);
  }
  return (
    <>
      <Navbar
        onSearch={handleEventSearch}
      ></Navbar>
      <Events
        search={search}
      ></Events>
    </>
  )
}

export default App
