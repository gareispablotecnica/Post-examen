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

