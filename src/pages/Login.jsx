import "./Login.css";
import React, { useContext } from "react";
import LoginContext from "../contexts/AuthContext";
const Login = () => {
  const { form, handleSubmit, handleInput, oportunidad } =
    useContext(LoginContext);
  return (
    <main className="mainLogin">
      <div className="container-login">
        <h2>Iniciar Sesion</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-part">
            {/* <label htmlFor="usuario">Usuario:</label> */}
            <input
              id="usuario"
              type="text"
              name="usuario"
              placeholder="Usuario"
              value={form.usuario}
              onChange={handleInput}
              className={oportunidad != 3 ? "errorActivado" : ""}
            />
          </div>
          <div className="form-part">
            {/* <label htmlFor="contraseña">Contraseña:</label> */}
            <input
              id="contraseña"
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              value={form.contraseña}
              onChange={handleInput}
              className={oportunidad != 3 ? "errorActivado" : ""}
            />
          </div>
          <div className="form-part">
            {oportunidad != 3 ? (
              <p className="olvidaste">
                El usuario {form.usuario} y la contraseña no coinciden
              </p>
            ) : (
              <p className="olvidaste">¿Olvidaste tu contraseña?</p>
            )}
          </div>
          <div className="form-part buttons">
            <button>Ingresar</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
