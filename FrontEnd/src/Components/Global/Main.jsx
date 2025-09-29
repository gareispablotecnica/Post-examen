// --> ° Importar Axios
import axios from 'axios'
import { useEffect, useState } from 'react'

function Main() {
  const [Alumnos, setAlumnos] = useState([])
  useEffect(() => {
    const Servidor = async () => {
      try {
        const URLServidor = await axios.get('http://localhost:3000/api/VerTabla')
        setAlumnos(URLServidor.data)
      }
      catch (Error) {

      }
    }
    Servidor()
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>DNI</td>
            <td>Apellido</td>
            <td>Edad</td>
          </tr>
        </thead>
        <tbody>
          {Alumnos.map((i) => (
            <tr key={i.Dni}>
              <td>{i.Dni}</td>
              <td>{i.Apellido}</td>
              <td>{i.Edad}</td>
            </tr>
          ))}

        </tbody>

      </table>
    </>
  )
}

export default Main