const express= require('express')

const App= express()

require('dotenv').config();
const PORT= process.env.PORT || 5000

App.listen(PORT,()=>{
    console.log(`🚀 Servidor en: http://localhost:${PORT}`)
})

const URL= require('./Router/Views.Router')
App.use('/api',URL)