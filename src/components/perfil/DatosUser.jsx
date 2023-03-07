import "./datosuser.css";
export default function DatosUser() {
  return (
    <div className="containerDatosUser">
      <p className="containerDatosUser_p">Datos personales</p>
      <div className="containerDatosUser_datos">
        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Nombre completo:
          </p>
          <p className="containerDatosUser_datos-input">
            Nombre Completo de Estudiante
          </p>
        </div>
        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Correo electronico:
          </p>
          <p className="containerDatosUser_datos-input">
            user010101sss@email.com
          </p>
        </div>
        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Direccion:
          </p>
          <p className="containerDatosUser_datos-input">
            direccion av ambrella 101 Mz L
          </p>
        </div>
        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Numero de celular:
          </p>
          <p className="containerDatosUser_datos-input">
            Celular 944703265954184
          </p>
        </div>

        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Telefono:
          </p>
          <p className="containerDatosUser_datos-input">
            Celular 944703265954184
          </p>
        </div>
      </div>
      <div className="containerDatosUser_button">
        <button className="containerDatosUser_button-btn edit">Editar</button>
        <button className="containerDatosUser_button-btn add">Info</button>
      </div>
    </div>
  );
}
