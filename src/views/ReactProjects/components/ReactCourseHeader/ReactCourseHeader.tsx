import { NavLink } from 'react-router-dom';
import headerStyles from './ReactCourseHeader.module.css';
import logo from 'src/assets/logo.png'
import qrCode from 'src/assets/qr-code.png'

const ReactCourseHeader = () => {
  return (
    <div className="w-100 d-flex flex-column flex-md-row justify-content-between align-items-center p-2 p-sm-3">
      <div className={`d-flex flex-column flex-md-row  align-items-center gap-2`}>
        <div className={`d-flex justify-content-center align-items-center gap-2 ${headerStyles.logos}`}>
          <img src={qrCode} alt="Qr a la página" className={headerStyles.qrCode} />
          <img src={logo} alt="Logo del Club de Programación" className={headerStyles.logo} />
        </div>
        <div className="">
          <h1 className={`${headerStyles.title} text-center text-md-start`}>
            Curso de Introducción a React
          </h1>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to={'/react/calendar'} className={({ isActive }: { isActive: any }) => `nav-link ${headerStyles.navLink} ${isActive ? headerStyles.navLinkActive : 'inactive'}`}>
                    Calendario
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/react/games'} className={({ isActive }: { isActive: any }) => `nav-link ${headerStyles.navLink} ${isActive ? headerStyles.navLinkActive : 'inactive'}`}>
                    Proyecto
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default ReactCourseHeader;