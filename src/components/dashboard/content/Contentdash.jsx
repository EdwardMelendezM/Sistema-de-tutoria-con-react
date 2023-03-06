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
            <td>1 dia y 2h</td>
            <td>Session</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
