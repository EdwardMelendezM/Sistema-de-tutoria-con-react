import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { LoginProvider } from "./contexts/loginContext";
import Ayuda from "./pages/Ayuda";
import Contactos from "./pages/Contactos";
import Home from "./pages/Home";
import Objetivos from "./pages/Objetivos";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <LoginProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/objetivos" element={<Objetivos />} />
              <Route path="/contacto" element={<Contactos />} />
              <Route path="/ayuda" element={<Ayuda />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
