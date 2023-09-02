import { ChangeEvent, Dispatch, EventHandler, KeyboardEvent, KeyboardEventHandler, SetStateAction, forwardRef, useImperativeHandle, useState } from "react";

export class NavbarRef extends HTMLElement {
  search?: string;
  setSearch?: Dispatch<SetStateAction<string>>;
  constructor() {
    super();
  }
};
customElements.define('tom-navbar-ref', NavbarRef);
type NavbarProps = { onSearch: EventHandler<any> };

const Navbar = forwardRef<NavbarRef, NavbarProps>(({ onSearch }: NavbarProps, logosRef: React.ForwardedRef<NavbarRef>) => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const handleSearchKeyDown: KeyboardEventHandler = (event: KeyboardEvent) => {
    if (event.key == "Enter") {
      onSearch(search.toLowerCase());
    }
  }
  useImperativeHandle(logosRef, () => ({
    ...new NavbarRef(),
    search: search,
    setSearch: setSearch,
  }))
  return (
    <div className="w-100 d-flex flex-column flex-md-row justify-content-between align-items-center p-1">
      <h4>Con datos extraídos de la API de TicketMaster</h4>
      <div className="m-1">
        <div className="input-icon">
          <input type="text" name="" id="" placeholder="Busca un evento..." className="form-control form-control-rounded"
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            value={search}
          />
          <span className="input-icon-addon">
            <i className="ti ti-search"></i>
          </span>
        </div>

      </div>
    </div>
  );
});
Navbar.displayName = 'Navbar';
export default Navbar;