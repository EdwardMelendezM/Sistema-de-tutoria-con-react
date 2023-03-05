import "./userheader.css";
export default function Userheader({ titulo = "Home" }) {
  return (
    <div className="containerUserHeader">
      <div className="containerUserHeader_unsaac">
        <img
          src="logo-unsaac.png"
          alt="unsaac"
          className="containerUserHeader_unsaac-img"
        />
      </div>
      <div className="containerUserHeader_titulo">
        <h3 className="containerUserHeader_titulo-titulo">{titulo}</h3>
      </div>
      <div className="containerUserHeader_datos">
        <div className="containerUserHeader_datos_img">
          <img
            src="userImage.jpg"
            alt="user image"
            className="containerUserHeader_datos_img-img"
          />
        </div>
        <div className="containerUserHeader_datos_usuario">
          <p className="containerUserHeader_datos_usuario-nombreUsuario">
            Nombre de usuario
          </p>
          <p className="containerUserHeader_datos_usuario-rolUsuario">
            Rol - estudiante
          </p>
        </div>
      </div>
    </div>
  );
}
