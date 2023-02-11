import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Ayuda from "./pages/Ayuda";
import Contactos from "./pages/Contactos";
import Home from "./pages/Home";
import Objetivos from "./pages/Objetivos";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Error404 from "./pages/Error404";
import {
  AYUDA,
  COMPUTO,
  CONTACTO,
  ERROR404,
  LOGIN,
  OBJETIVOS,
  PRIVATE,
} from "./config/routes/paths";
import AuthContextProvider from "./contexts/AuthContext";
import Computo from "./pages/Computo";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={OBJETIVOS} element={<Objetivos />} />
            <Route path={CONTACTO} element={<Contactos />} />
            <Route path={AYUDA} element={<Ayuda />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={ERROR404} element={<Error404 />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Computo />} />
            <Route path={ERROR404} element={<Error404 />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
