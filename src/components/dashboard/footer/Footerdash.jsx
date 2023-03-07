import { useEffect } from "react";
import { useState } from "react";
import "./footerdash.css";
export default function Footerdash() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  setTimeout(() => {
    setHora(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div className="containerFooterdash">
      <p className="containerFooterdash-p">{hora}</p>
    </div>
  );
}
