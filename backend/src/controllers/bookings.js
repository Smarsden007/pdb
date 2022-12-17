const db = require('../db')


exports.createBooking = async (req, res) => {
    const { email, phone } = req.body
  try {
    await db.query('bookings(fulll_name, email, phone, delivery_ad, bouncer, rent_date, rental_time, generator, balloons, half_arch, full_arch, vinyl, vinyl_theme, park, cust_nt, int_nt, paid, deposit, contract_sign) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)', [
        fulll_name, email, phone, delivery_ad, bouncer, rent_date, rental_time, generator, balloons, half_arch, full_arch, vinyl, vinyl_theme, park, cust_nt, int_nt, paid, deposit, contract_sign
    ])

    return res.status(201).json({
      success: true,
      message: 'The creation was succefull',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}


exports.getBookings = async (req, res) => {
    try {
      const { rows } = await db.query('select * FROM bookings')
  
      return res.status(200).json({
        success: true,
        bookings: rows,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  exports.getById = async (req,res) => {
    const { idd } = req.params;
    try {
        const bookings = await db.query("SELECT * FROM bookings WHERE id = $1", [idd])
        res.json(bookings.rows[0])
    } catch (err){
        console.error(err.message)
    }
  }