import "./perfil.css";
export default function Perfil() {
  return (
    <div className="containerPerfil">
      <div className="containerPerfil_Photo">
        <div className="contaienrPerfil-Photo_img">
          <img
            src="./userImage.jpg"
            alt="user"
            className="containerPerfil_Photo-img"
          />
          <ion-icon
            className="containerPerfil_Photo-icon"
            name="camera-outline"
          ></ion-icon>
        </div>
        <p className="containerPerfil_Photo_nameUser">Nombre del usuario</p>
        <p className="containerPerfil_Photo_rolUser">Rol de usuario</p>
      </div>
    </div>
  );
}
