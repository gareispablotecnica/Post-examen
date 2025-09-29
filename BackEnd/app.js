const express= require('express')

const App= express()

require('dotenv').config();
const PORT= process.env.PORT || 5000

const cors= require('cors')
App.use(cors())
App.use(express.json())

App.listen(PORT,()=>{
    console.log(`🚀 Servidor en: http://localhost:${PORT}`)
})

const URL= require('./Router/Views.Router')
App.use('/api',URL)