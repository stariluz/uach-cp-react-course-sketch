import { useRef, useState } from 'react'
import './App.css'
import Navbar, { NavbarRef } from './components/Navbar/Navbar'
import Events from './components/Events'
// import SignupForm from './components/SignupForm/SignupForm'
import Info from './components/Info/Info'

function App() {
  const [search, setSearch] = useState("")
  const logosRef = useRef<NavbarRef>(null);
  const handleEventSearch = (search: string) => {
    console.log(logosRef.current?.search);
    console.log(logosRef.current?.setSearch?.(''));

    setSearch(search);
  }
  return (
    <>
      <Navbar
        onSearch={handleEventSearch}
        ref={logosRef}
      ></Navbar>
      <div className="container-fluid">
        <div className="row">
          <Info></Info>
          <div className="col-12 col-sm-8 col-md-9">
            <Events
              search={search}
            ></Events>
          </div>
        </div>

      </div>
      {/* <SignupForm></SignupForm> */}
    </>
  )
}

export default App
