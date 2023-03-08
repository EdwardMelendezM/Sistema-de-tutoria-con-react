import { useState } from "react";
import "./datosuser.css";
export default function DatosUser() {
  const [isEdit, setIsEdit] = useState(false);
  const handleClickEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div className="containerDatosUser">
      <p className="containerDatosUser_p">Datos personales</p>
      <div className="containerDatosUser_datos">
        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Nombre completo:
          </p>
          {isEdit ? (
            <input
              type="text"
              className="containerDatosUser_datos-input_input"
              value="Nombre Completo de Estudiante"
            />
          ) : (
            <p className="containerDatosUser_datos-input">
              Nombre Completo de Estudiante
            </p>
          )}
        </div>
        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Correo electronico:
          </p>
          {isEdit ? (
            <input
              type="text"
              className="containerDatosUser_datos-input_input"
              value="user010101sss@email.com"
            />
          ) : (
            <p className="containerDatosUser_datos-input">
              user010101sss@email.com
            </p>
          )}
        </div>
        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Direccion:
          </p>
          {isEdit ? (
            <input
              type="text"
              className="containerDatosUser_datos-input_input"
              value="Direccion av ambrella 101 Mz L"
            />
          ) : (
            <p className="containerDatosUser_datos-input">
              Direccion av ambrella 101 Mz L
            </p>
          )}
        </div>
        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Numero de celular:
          </p>
          {isEdit ? (
            <input
              type="text"
              className="containerDatosUser_datos-input_input"
              value="944703265954184"
            />
          ) : (
            <p className="containerDatosUser_datos-input">944703265954184</p>
          )}
        </div>

        <div className="containerDatosUser_datos_personales">
          <p className="containerDatosUser_datos-input-label">
            <ion-icon name="caret-forward"></ion-icon>
            Telefono:
          </p>

          {isEdit ? (
            <input
              type="text"
              className="containerDatosUser_datos-input_input"
              value="944703265954184"
            />
          ) : (
            <p className="containerDatosUser_datos-input">944703265954184</p>
          )}
        </div>
      </div>
      <div className="containerDatosUser_button">
        {isEdit ? (
          <button
            className="containerDatosUser_button-btn edit"
            onClick={handleClickEdit}
          >
            Confirmar
          </button>
        ) : (
          <button
            className="containerDatosUser_button-btn edit"
            onClick={handleClickEdit}
          >
            Editar
          </button>
        )}
        <button className="containerDatosUser_button-btn add">Info</button>
      </div>
    </div>
  );
}
