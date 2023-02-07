import "./LoginInput.css";
import React, { useState } from "react";
const LoginInput = () => {
  const initialForm = {
    usuario: "",
    contraseña: "",
  };
  const [form, setForm] = useState(initialForm);
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
            />
          </div>
          <div className="form-part">
            <p className="olvidaste">¿Olvidaste tu contraseña?</p>
          </div>
          <div className="form-part buttons">
            <button>Ingresar</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginInput;
