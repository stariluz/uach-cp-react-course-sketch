import { NavLink } from 'react-router-dom';
import headerStyles from './PythonCourseHeader.module.css';
import logo from 'src/assets/logo.png'
import pythonLogo from 'src/assets/python-logo.png'

const PythonCourseHeader = () => {
  return (
    <div className="w-100 d-flex flex-column flex-md-row justify-content-between align-items-center p-2 p-sm-3">
      <div className={`d-flex flex-column flex-md-row  align-items-center`}>
        <div className={`d-flex justify-content-center align-items-center`}>
          <img src={logo} alt="Logo del Club de Programación" className={headerStyles.logo} />
          <img src={pythonLogo} alt="Logo del Club de Programación" className={headerStyles.pythonLogo} />
        </div>
        <div className="">
          <h1 className={`${headerStyles.title} fw-bold d-flex align-items-center`}>
            Curso de Introducción a Python
          </h1>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to={'/python/calendar'} className={({ isActive }: { isActive: any }) => `nav-link ${headerStyles.navLink} ${isActive ? headerStyles.navLinkActive : 'inactive'}`}>
                    Calendario
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
export default PythonCourseHeader;