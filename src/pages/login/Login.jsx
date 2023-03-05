import "./Login.css";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const initialDb = [
    {
      id: 1,
      user: "Seiya",
      nombre: "Pegaso",
      pass: "123123",
    },
    {
      id: 2,
      user: "Shiryu",
      nombre: "Dragon",
      pass: "123123",
    },
    {
      id: 3,
      user: "Hyoga",
      nombre: "Cisne",
      pass: "123123",
    },
    {
      id: 4,
      user: "Shun",
      nombre: "Adromeda",
      pass: "123123",
    },
    {
      id: 5,
      user: "Ikki",
      nombre: "Fenix",
      pass: "123123",
    },
    {
      id: 6,
      user: "edu",
      nombre: "Centauro",
      pass: "123123",
    },
  ];
  const initialForm = {
    usuario: "",
    contraseña: "",
  };
  const { login } = useAuthContext();
  const [db, setDb] = useState(initialDb);
  const [form, setForm] = useState(initialForm);
  const [oportunidad, setOportunidad] = useState(3);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const getData = async (url, form) => {
    const newForm = { email: form.usuario, password: form.contraseña };
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    })
      .then((res) => res.json())
      .then((newDatos) => console.log())
      .catch((err) => console.log());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData("http://localhost:3002/users/login", form);
    let existUser = db.find(
      (user) => user.user === form.usuario && user.pass === form.contraseña
    );
    if (!existUser) {
      setOportunidad(oportunidad - 1);
    } else {
      login();
    }
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
              className={oportunidad != 3 ? "errorActivado" : ""}
              autoComplete="off"
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
              autoComplete="off"
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
