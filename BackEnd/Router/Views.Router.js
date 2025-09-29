const express = require('express')

const Rutas= express.Router()

const Controller=require('../Controllers/View.Controller')

Rutas.get('/VerTabla',Controller.VistaDatos)

module.exports=Rutas;

