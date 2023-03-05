import Sidebar from "../../components/dashboard/Sidebar";
import Panel from "../../components/panel/Panel";
import { useAuthContext } from "../../contexts/AuthContext";
import "./computo.css";
const Computo = () => {
  const { logout } = useAuthContext();
  return (
    <div className="container_computo">
      <Sidebar />
      <Panel />
      <h3>Computo</h3>
      <button onClick={() => logout()}>Salir</button>
    </div>
  );
};

export default Computo;
