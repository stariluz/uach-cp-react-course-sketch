import { ChangeEvent, EventHandler, KeyboardEvent, KeyboardEventHandler, useState } from "react";

const Navbar = ({ onSearch }: { onSearch: EventHandler<any> }) => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const handleSearchKeyDown: KeyboardEventHandler = (event: KeyboardEvent) => {
    if (event.key == "Enter") {
      onSearch(search.toLowerCase());
    }
  }
  return (
    <div>
      <p>Ticket office</p>
      <input type="text" name="" id="" placeholder="Busca un evento..."
        onChange={handleSearchChange}
        onKeyDown={handleSearchKeyDown}
        value={search}
      />
    </div>
  );
};

export default Navbar;