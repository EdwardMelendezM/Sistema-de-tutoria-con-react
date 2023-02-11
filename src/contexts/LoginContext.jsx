import { createContext, useEffect, useState } from "react";
const LoginContext = createContext();
const LoginProvider = ({ children }) => {
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
  const [db, setDb] = useState(initialDb);
  const [form, setForm] = useState(initialForm);
  const [auth, setAuth] = useState(null);
  const [oportunidad, setOportunidad] = useState(3);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existUser = db.find(
      (user) => user.user === form.usuario && user.pass === form.contraseña
    );
    if (!existUser) {
      setOportunidad(oportunidad - 1);
    }
  };
  // useEffect(() => {
  //   if (oportunidad == 0) {
  //   }
  // }, [oportunidad]);
  const data = { db, form, handleInput, handleSubmit, oportunidad };
  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};
export { LoginProvider };
export default LoginContext;
