import { useState } from "react"
import axios from 'axios'

function Registros() {

    // ---> Estados para cargar los datos de los input a la base de datos
    const [Dni, setDni] = useState(0)
    const [Apellido, setApellido] = useState("")
    const [Edad, setEdad] = useState(0)

    const handleSubmit =async (e) => {
        e.preventDefault();
        const Datos = { Dni, Apellido, Edad };
            try {
                const URL = await fetch('http://localhost:3000/api/VerTabla',
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(Datos)
                    })
                const data = await URL.json()
                alert(data.Mensaje || 'Datos Registrados Correctamente')
                console.log("Registrados Correctamente")

            }
            catch (Error) {
                console.error(Error)
            }
        }

    
    return (

        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Dni</label>
                <input type="number" name="Dni" id="Dni" value={Dni}
                    onChange={(e) => setDni(e.target.value)} />

                <label htmlFor="">Apellido</label>
                <input type="text" name="Apellido" id="Apellido" value={Apellido}
                    onChange={(e) => setApellido(e.target.value)} />

                <label htmlFor="">Edad</label>
                <input type="number" name="Edad" id="Edad" value={Edad}
                    onChange={(e) => setEdad(e.target.value)} />

                <input type="submit" value="Registrar" />
            </form>
        </>
    )
}

export default Registros