const express = require('express') //importing express
require('dotenv').config() //importing dotenv configuration
const app = express() //creating instance of express
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000 // port to listen on
const connectDB = require('./config/db')

// using body-parser to get body of request
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

// using /players routes
const playerRoutes = require('./routes/players')
app.use('/players', playerRoutes)

// handling 404 error
app.use('*', (req, res) => {
  return res.status(404).json({
    message: 'Route not found'
  })
})

// Connecting to db before starting server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
