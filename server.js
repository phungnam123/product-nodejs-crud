require('dotenv').config()
const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const productRoute = require('./routes/product')

//
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(helmet())

// router
app.use('/api/v1/product', productRoute)
// db
require('./db/connect')

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
