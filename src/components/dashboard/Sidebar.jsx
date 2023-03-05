import { useAuthContext } from "../../contexts/AuthContext";
import "./sidebar.css";
export default function Sidebar() {
  const { logout } = useAuthContext();
  return (
    <>
      <div className="container_sidebar">
        <h3>Este es el sidebar</h3>
        <button onClick={() => logout()}>Salir</button>
      </div>
    </>
  );
}
