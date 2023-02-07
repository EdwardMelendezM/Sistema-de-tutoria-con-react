import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="containerTitulo">
            <img src="./public/logo-unsaac.png" alt="Logo unsaac" />
            <p className="tituloPrincipal">UNSAAC</p>
            <p className="tituloSecundario">TUTORIAS</p>
          </div>
          <div className="containerEnlaces">
            <NavLink className="enlace" to="/">
              Home
            </NavLink>
            <NavLink className="enlace" to="/objetivos">
              Objetivos
            </NavLink>
            <NavLink className="enlace" to="/contacto">
              Contacto
            </NavLink>
            <NavLink className="enlace" to="/ayuda">
              Ayuda
            </NavLink>
            <button className="botonLogin">
              <NavLink className="enlace" to="/login">
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
