import "./switch.css";
export default function Switch() {
  return (
    <div className="switchContainer">
      <input type="checkbox" id="switch" />
      <label htmlFor="switch" className="labelSwitch"></label>
    </div>
  );
}
