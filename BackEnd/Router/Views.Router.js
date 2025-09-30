const express = require('express')

const Rutas= express.Router()

const Controller=require('../Controllers/View.Controller')

Rutas.get('/VerTabla',Controller.VistaDatos)
Rutas.post('/VerTabla',Controller.RegistrarDatos)

module.exports=Rutas;

