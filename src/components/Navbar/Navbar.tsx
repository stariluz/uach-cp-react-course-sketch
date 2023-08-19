import { ChangeEvent, Dispatch, EventHandler, KeyboardEvent, KeyboardEventHandler, SetStateAction, forwardRef, useImperativeHandle, useRef, useState } from "react";
import navbarStyles from './Navbar.module.css';
import logo from 'src/assets/logo.png'
import qrCode from 'src/assets/qr-code.png'

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
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 p-sm-4 p-lg-5">
      <div className={`d-flex flex-column flex-md-row  align-items-center`}>
        <div className={`d-flex justify-content-center align-items-center`} ref={logosRef as any}>
          <img src={qrCode} alt="Qr a la página" className={navbarStyles.qrCode} />
          <img src={logo} alt="Logo del Club de Programación" className={navbarStyles.logo} />
        </div>
        <div className="">
          <h1 className={`${navbarStyles.title} fw-bold d-flex align-items-center`}>
            Curso de React
          </h1>
          <h4>Con datos extraídos de la API de TicketMaster</h4>

        </div>
      </div>
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