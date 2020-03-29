const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// Iniciando o App
const app = express()
// Permitir envio de Json
app.use(express.json())
// Permitir Cors
app.use(cors())

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Requreminto de todos os models
requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3030)
