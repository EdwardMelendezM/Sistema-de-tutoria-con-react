import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="containerTitulo">
            <img
              src="/logo-unsaac.png"
              alt="Logo unsaac"
              className="logo-unsaac"
            />
            <p className="tituloPrincipal">UNSAAC</p>
            <p className="tituloSecundario">TUTORIAS</p>
          </div>
          <div className="containerEnlaces">
            <NavLink activeclassname="active" className="enlace" to="/">
              Home
            </NavLink>
            <NavLink
              activeclassname="active"
              className="enlace"
              to="/objetivos"
            >
              Objetivos
            </NavLink>
            <NavLink activeclassname="active" className="enlace" to="/contacto">
              Contacto
            </NavLink>
            <NavLink activeclassname="active" className="enlace" to="/ayuda">
              Ayuda
            </NavLink>
            <button className="botonLogin">
              <NavLink activeclassname="active" className="enlace" to="/login">
                Login
              </NavLink>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
