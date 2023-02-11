import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Ayuda from "./pages/Ayuda";
import Contactos from "./pages/Contactos";
import Home from "./pages/Home";
import Objetivos from "./pages/Objetivos";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path="/objetivos" element={<Objetivos />} />
            <Route path="/contacto" element={<Contactos />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path={Private}></Route>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
