import "./mini.css";
export default function Mini({
  title = "Reunion",
  text = "1h",
  icon = <ion-icon name="alarm-outline"></ion-icon>,
}) {
  return (
    <div className="containerMiniDash">
      <div className="containerMiniDash_content">
        <h3 className="containerMiniDash_content-text">{text}</h3>
        <h3 className="containerMiniDash_content-title">{title}</h3>
      </div>
      <div className="containerMiniDash_icon">{icon}</div>
    </div>
  );
}
