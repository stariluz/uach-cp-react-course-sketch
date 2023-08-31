import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar, { NavbarRef } from "src/components/Navbar/Navbar";

const ReactProjects = () => {
  const [search, setSearch] = useState("")
  const logosRef = useRef<NavbarRef>(null);
  const handleEventSearch = (search: string) => {
    console.log(logosRef.current?.search);
    console.log(logosRef.current?.setSearch?.(''));

    setSearch(search);
  }
  return <>
    <Navbar
      onSearch={handleEventSearch}
      ref={logosRef}
    ></Navbar>
    <Outlet context={{ search }}></Outlet>
  </>
}
export default ReactProjects;