import "./contentdash.css";
export default function Contentdash() {
  return (
    <div className="containerDashboar">
      <h3 className="containerDashboar-titulo">Pendientes</h3>
      <table className="containerDashboar_table">
        <thead className="containerDashboar_table-head">
          <tr>
            <th>Empieza</th>
            <th>Titulo</th>
          </tr>
        </thead>
        <tbody className="containerDashboar_table-body">
          <tr>
            <td>2h</td>
            <td>Session de aprendizaje</td>
          </tr>
          <tr>
            <td>2 dias y 30min</td>
            <td>Maestria de colmena</td>
          </tr>
          <tr>
            <td>1 semana y 2 dias</td>
            <td>Practica de artesania</td>
          </tr>
          <tr>
            <td>1 semana y 3 dias</td>
            <td>Practica de matematica</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
