const db= require('../Server/database')


exports.VistaDatos=(req,res)=>{
    const query='SELECT * FROM Datos';
    db.all(query,[],(Error,Tabla)=>{
        if(Error){
            // ---> Lo ve el USUARIO
            return res.status(500).json({Error: 'Tabla no encontrada'})
        }
        else{
            res.json(Tabla)
        }
    })
}



exports.RegistrarDatos=(req,res)=>{

    const{Dni,Apellido,Edad}=req.body;

    const query='INSERT INTO Datos(Dni,Apellido,Edad)VALUES(?,?,?)';
    db.run(query,[Dni,Apellido,Edad],(Error)=>{
        if(Error){
            // ---> Lo ve el USUARIO
            return res.status(500).json({Error: 'Datos no Encopntrados'})
        }
        else{
            res.json({
                Mensaje:"Datos Registrados",
                Dni:this.lastID
            })
        }
    })
}