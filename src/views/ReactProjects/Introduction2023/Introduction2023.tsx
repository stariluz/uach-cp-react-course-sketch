import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar, { NavbarRef } from "src/components/Navbar/Navbar";
import useVideogamesData from "src/hooks/useVideogamesData";

const Introduction2023 = () => {
  const [search, setSearch] = useState("")
  const { games, error, isLoading, fetchVideogames } = useVideogamesData();
  const navbarRef = useRef<NavbarRef>(null);

  useEffect(() => {
    fetchVideogames();
  }, [])

  const handleEventSearch = (search: string) => {
    setSearch(search);
    fetchVideogames(`&search=${search}`);
  }

  return (
    <>
      <Navbar
        onSearch={handleEventSearch}
        ref={navbarRef}
      ></Navbar>
      <Outlet context={{ search, games, error, isLoading }}></Outlet>
    </>
  );
}
export default Introduction2023;