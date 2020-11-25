const express = require('express')
const app = require('./app')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/ok', async (req, res) => {
  res.send('ok  25.11.2020')
})

app.listen(PORT)
