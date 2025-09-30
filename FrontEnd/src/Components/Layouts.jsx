// ---> Atajo : rfec + enter
// --> Hoja de CSS

import Encabezado from './Global/Encabezado'
import './Layouts.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Global/Main'

function Layouts() {
  return (
    <>
      <Router>
        {/* Rutas para el Encabezado */}
        <Encabezado />
        <Routes>
          <Route path="/VerAlumnos" element={<Main />} />
        </Routes>
      </Router>

    </>
  )
}

export default Layouts