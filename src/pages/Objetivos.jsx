import "./Objetivos.css";
const Objetivos = () => {
  return (
    <main className="mainObjetivos">
      <img src="/adorno1.png" alt="adorno" className="adorno1" />
      <div className="row">
        <div className="col">
          <h3>¿A quién va dirigido?</h3>
          <p>Dirigido a estudiantes universitarios de la Unsaac</p>
        </div>
        <img src="alumnosJunta1.png" alt="Alumos reunion" />
      </div>
      <div className="row">
        <img src="alumnosJunta2.png" alt="Alumnos reunion" />
        <div className="col">
          <h3>¿Qué te proponemos?</h3>
          <p>
            Poner a disposicion, herramientas y recursos para fortalecer tu roll
            y brindar acompañamiento socioefectivo y cognitivo a los estudiantes
          </p>
        </div>
      </div>
      <img src="/adorno1.png" alt="adorno" className="adorno1" />
    </main>
  );
};

export default Objetivos;
