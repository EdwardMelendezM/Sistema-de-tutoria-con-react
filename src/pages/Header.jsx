import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/ayuda">Ayuda</NavLink>
          <NavLink to="/computo">Computo</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
