import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LoginInput from "./LoginInput";
import Header from "./../pages/Header";
import Home from "./../pages/Home";
import Error404 from "./../pages/Error404";
import Footer from "./../pages/Footer";
import PrivateRoute from "./PrivateRoute";
import Objetivos from "../pages/Objetivos";
import Contactos from "./../pages/Contactos";
import Ayuda from "./../pages/Ayuda";
import Computo from "../pages/Computo";

const Login = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/objetivos" element={<Objetivos />} />
          <Route path="/contacto" element={<Contactos />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/login" element={<LoginInput />} />
          <Route path="/computo" element={<PrivateRoute private={Computo} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Login;
