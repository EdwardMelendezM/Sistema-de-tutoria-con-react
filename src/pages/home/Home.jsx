import "./Home.css";
const Home = () => {
  return (
    <main className="mainHome">
      <div className="principal">
        <img
          src="/unsaac-2.png"
          alt="trisentenario unsaac"
          className="tricentenario"
        />
      </div>
      <div className="row">
        <div className="parte1">
          <h3>TUTORÍA</h3>
          <p>Bienestar y participacion</p>
        </div>
        <div className="parte2">
          <img src="alumnos.png" alt="alumnos" className="alumnos" />
        </div>
      </div>
    </main>
  );
};

export default Home;
