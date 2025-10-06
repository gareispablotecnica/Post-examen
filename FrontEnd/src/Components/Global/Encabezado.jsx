import { Link } from "react-router-dom";

function Encabezado() {
  return (
    <>
      <header className="encabezado">
        <nav className="menu">
          {/* URL HIPERVINCULOS */}
          <Link to={'/'}>Home</Link>
          <Link to={'/VerAlumnos'}>Ver Alumnos</Link>
          <Link to={'/RegistrarAlumnos'}>Registrar Alumnos</Link>
        </nav>
      </header>
    </>
  )
}

export default Encabezado