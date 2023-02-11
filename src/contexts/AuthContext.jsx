import { createContext, useCallback } from "react";
import PropTypes from "prop-types";

const MY_AUTH_APP = "MY_AUTH_APP_1";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? false
  );
  const login = useCallback(() => {
    localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  }, []);
  const logout = useCallback(() => {
    window.localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(() => {
    login, logout, isAuthenticated;
  }, [login, logout, isAuthenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContext.Provider.propTypes = {
  children: PropTypes.object,
};
// import { createContext, useState } from "react";
// const AuthContext = createContext();
// const AuthProvider = ({ children }) => {
//   const initialDb = [
//     {
//       id: 1,
//       user: "Seiya",
//       nombre: "Pegaso",
//       pass: "123123",
//     },
//     {
//       id: 2,
//       user: "Shiryu",
//       nombre: "Dragon",
//       pass: "123123",
//     },
//     {
//       id: 3,
//       user: "Hyoga",
//       nombre: "Cisne",
//       pass: "123123",
//     },
//     {
//       id: 4,
//       user: "Shun",
//       nombre: "Adromeda",
//       pass: "123123",
//     },
//     {
//       id: 5,
//       user: "Ikki",
//       nombre: "Fenix",
//       pass: "123123",
//     },
//     {
//       id: 6,
//       user: "edu",
//       nombre: "Centauro",
//       pass: "123123",
//     },
//   ];
//   const initialForm = {
//     usuario: "",
//     contraseña: "",
//   };
//   const [db, setDb] = useState(initialDb);
//   const [form, setForm] = useState(initialForm);
//   const [auth, setAuth] = useState(null);
//   const [oportunidad, setOportunidad] = useState(3);

//   const handleInput = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let existUser = db.find(
//       (user) => user.user === form.usuario && user.pass === form.contraseña
//     );
//     if (!existUser) {
//       setOportunidad(oportunidad - 1);
//     }
//   };

//   const data = { db, form, handleInput, handleSubmit, oportunidad };
//   return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
// };
// export { AuthProvider };
// export default AuthContext;
