import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";

import "./sidebar.css";
export default function Sidebar() {
  const refNavigation = useRef(null);
  const refList = useRef(null);

  const handleActiveNavigator = () => {
    const navigationContainer = refNavigation.current;
    const temp = navigationContainer.classList.contains("open");
    if (temp) {
      navigationContainer.classList.remove("open");
    } else {
      navigationContainer.classList.add("open");
    }
  };
  const handleClickListItem = (e) => {
    const list = document.querySelectorAll(".list");
    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));
  };

  const { logout } = useAuthContext();
  return (
    <div className="sidebarContainer">
      <div className="navigation" ref={refNavigation}>
        <div className="menuToggle" onClick={handleActiveNavigator}></div>
        <ul>
          <li
            className="list active "
            ref={refList}
            onClick={handleClickListItem}
          >
            <Link to="/computo">
              <span className="icon home">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li className="list" ref={refList} onClick={handleClickListItem}>
            <Link to="/computo/about">
              <span className="icon about">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="text">About</span>
            </Link>
          </li>
          <li className="list" ref={refList} onClick={handleClickListItem}>
            <Link to="/computo/session">
              <span className="icon session">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className="text">Sessions</span>
            </Link>
          </li>
          <li className="list" ref={refList} onClick={handleClickListItem}>
            <Link to="/computo/reserve">
              <span className="icon reserve">
                <ion-icon name="camera-outline"></ion-icon>
              </span>
              <span className="text">Reserve</span>
            </Link>
          </li>
          <li className="list" ref={refList} onClick={handleClickListItem}>
            <Link to="/computo/setting">
              <span className="icon setting">
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
    </div>
  );
}
