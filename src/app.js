const express = require('express')
const morgan = require('morgan')
const bodyParse = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

// disable X-Powered-By header to avoid detecting apps running Express and then launch specifically-targeted attacks 
app.disable('x-powered-by')

// set routes on another js file
require('./routes')(app)

// server run if DB connected successfully
sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
  .catch((error) => {
    console.log(error)
  })
  