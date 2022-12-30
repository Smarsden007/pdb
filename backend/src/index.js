const express = require('express')
const app = express()
const { PORT, CLIENT_URL } = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const pool = require("./db/index.js")
//import passport middleware
require('./middlewares/passport-middleware')

//initialize middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: ['http://localhost:3000', 'https://pdb-production.up.railway.app'],
  credentials: true
}))

//{ origin: CLIENT_URL, credentials: true }

app.use(passport.initialize())

//import routes
const authRoutes = require('./routes/auth')

//initialize routes
app.use('/api', authRoutes)


//app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

appStart()
