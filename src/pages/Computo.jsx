import { useAuthContext } from "../contexts/AuthContext";

const Computo = () => {
  const { logout } = useAuthContext();
  return (
    <div>
      <h3>Computo</h3>
      <button onClick={() => logout()}>Salir</button>
    </div>
  );
};

export default Computo;
