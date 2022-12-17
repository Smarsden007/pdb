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
app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(passport.initialize())

//import routes
const authRoutes = require('./routes/auth')

//initialize routes
app.use('/api', authRoutes)

// app.post('/bookings', async (req, res) => {
//   try {
//     const { fulll_name, email, phone, delivery_ad, bouncer, rent_date, rental_time, generator, balloons, half_arch, full_arch, vinyl, vinyl_theme, park, cust_nt, int_nt, paid, deposit, contract_sign } = req.body;
//     const newBooking = await pool.query(
//       "INSERT INTO bookings(fulll_name, email, phone, delivery_ad, bouncer, rent_date, rental_time, generator, balloons, half_arch, full_arch, vinyl, vinyl_theme, park, cust_nt, int_nt, paid, deposit, contract_sign) VALUES ($1) RETUNRING *",
//       [fulll_name, email, phone, delivery_ad, bouncer, rent_date, rental_time, generator, balloons, half_arch, full_arch, vinyl, vinyl_theme, park, cust_nt, int_nt, paid, deposit, contract_sign]
//     );
//     res.json(newBooking)
//   } catch (err) {
//     console.error(err.message)
//   }
// })


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
