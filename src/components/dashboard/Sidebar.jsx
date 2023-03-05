import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import "./sidebar.css";
export default function Sidebar() {
  const refNavigation = useRef(null);

  const handleActiveNavigator = () => {
    const navigationContainer = refNavigation.current;
    const temp = navigationContainer.classList.contains("open");
    if (temp) {
      navigationContainer.classList.remove("open");
    } else {
      navigationContainer.classList.add("open");
    }
  };

  const { logout } = useAuthContext();
  return (
    <>
      <div className="navigation" ref={refNavigation}>
        <div className="menuToggle" onClick={handleActiveNavigator}></div>
        <ul>
          <li className="list">
            <Link>
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li className="list">
            <Link to="">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="text">About</span>
            </Link>
          </li>
          <li className="list">
            <Link to="">
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className="text">Sessions</span>
            </Link>
          </li>
          <li className="list">
            <Link to="">
              <span className="icon">
                <ion-icon name="camera-outline"></ion-icon>
              </span>
              <span className="text">Reserve</span>
            </Link>
          </li>
          <li className="list">
            <Link to="">
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className="text">Setting</span>
            </Link>
          </li>
        </ul>
        <div className="menuLogout" onClick={() => logout()}>
          <span className="icon">
            <ion-icon name="log-out-outline"></ion-icon>
          </span>
          <span className="text">Logout</span>
        </div>
      </div>
      {/* <h3>Este es el sidebar</h3>
      <button onClick={() => logout()}>Salir</button> */}
    </>
  );
}
