import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Ayuda from "./pages/home/Ayuda";
import Contactos from "./pages/home/Contactos";
import Home from "./pages/home/Home";
import Objetivos from "./pages/home/Objetivos";
import Login from "./pages/login/Login";

import Error404 from "./pages/error/Error404";
import {
  AYUDA,
  CONTACTO,
  ERROR404,
  HOME_RESERVE,
  HOME_SESSION,
  HOME_ABOUT,
  LOGIN,
  OBJETIVOS,
  PRIVATE,
  HOME_SETTING,
} from "./config/routes/paths";
import AuthContextProvider from "./contexts/AuthContext";
import Computo from "./pages/computo/Computo";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import LayoutHome from "./components/layout/LayoutHome";
import LayoutComputo from "./components/layout/LayoutComputo";
import ComputoAbout from "./pages/computo/about/ComputoAbout";
import ComputoSession from "./pages/computo/session/ComputoSession";
import ComputoReserve from "./pages/computo/reserve/ComputoReserve";
import ComputoSetting from "./pages/computo/setting/ComputoSetting";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<LayoutHome children={<Home />} />} />
            <Route
              path={OBJETIVOS}
              element={<LayoutHome children={<Objetivos />} />}
            />
            <Route
              path={CONTACTO}
              element={<LayoutHome children={<Contactos />} />}
            />
            <Route path={AYUDA} element={<LayoutHome children={<Ayuda />} />} />
            <Route path={LOGIN} element={<LayoutHome children={<Login />} />} />
            <Route
              path={ERROR404}
              element={<LayoutHome children={Error404} />}
            />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<LayoutComputo children={<Computo />} />} />
            <Route
              path={HOME_ABOUT}
              element={<LayoutComputo children={<ComputoAbout />} />}
            />
            <Route
              path={HOME_SESSION}
              element={<LayoutComputo children={<ComputoSession />} />}
            />
            <Route
              path={HOME_RESERVE}
              element={<LayoutComputo children={<ComputoReserve />} />}
            />
            <Route
              path={HOME_SETTING}
              element={<LayoutComputo children={<ComputoSetting />} />}
            />
            <Route path={ERROR404} element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
