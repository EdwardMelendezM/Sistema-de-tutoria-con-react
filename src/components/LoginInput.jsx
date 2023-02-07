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
  return (
    <>
      <h2>Iniciar Sesion</h2>
      <form>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input
            id="usuario"
            type="text"
            name="usuario"
            placeholder="Ingrese su usuario"
            value={form.usuario}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            id="contraseña"
            type="password"
            name="contraseña"
            placeholder="Ingrese su contraseña"
            value={form.contraseña}
            onChange={handleInput}
          />
        </div>
        <button>Ingresar</button>
      </form>
    </>
  );
};

export default LoginInput;
