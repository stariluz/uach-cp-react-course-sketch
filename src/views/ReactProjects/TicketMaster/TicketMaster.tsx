import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar, { NavbarRef } from "src/components/Navbar/Navbar";
const TicketMaster = () => {
  const [search, setSearch] = useState("")
  const navbarRef = useRef<NavbarRef>(null);
  const handleEventSearch = (search: string) => {
    console.log(navbarRef.current?.search);
    console.log(navbarRef.current?.setSearch?.(''));

    setSearch(search);
  }
  return <>
    <Navbar
      onSearch={handleEventSearch}
      ref={navbarRef}
    ></Navbar>
    <Outlet context={{ search }}></Outlet>
  </>
}
export default TicketMaster;