const db = require("../db");

exports.createBooking = async (req, res) => {
  const { email, phone } = req.body;
  try {
    await db.query(
      "bookings(fulll_name, email, phone, delivery_ad, bouncer, rent_date, rental_time, generator, balloons, half_arch, full_arch, vinyl, vinyl_theme, park, cust_nt, int_nt, paid, deposit, contract_sign) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)",
      [
        fulll_name,
        email,
        phone,
        delivery_ad,
        bouncer,
        rent_date,
        rental_time,
        generator,
        balloons,
        half_arch,
        full_arch,
        vinyl,
        vinyl_theme,
        park,
        cust_nt,
        int_nt,
        paid,
        deposit,
        contract_sign,
      ]
    );

    return res.status(201).json({
      success: true,
      message: "The creation was succefull",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.editBooking = async (req, res) => {
  try {
    const {
      id,
      full_name,
      email,
      phone,
      delivery_ad,
      bouncer,
      rent_date,
      rental_time,
      generator,
      balloons,
      half_arch,
      full_arch,
      vinyl,
      vinyl_theme,
      park,
      cust_nt,
      int_nt,
      paid,
      deposit,
      contract_sign,
      booked_by,
      delivered_by,
    } = req.body;

    const result = await db.query(
      "UPDATE bookings SET full_name = $1, email = $2, phone = $3, delivery_ad = $4, bouncer = $5, rent_date = $6, rental_time = $7, generator = $8, balloons = $9, half_arch = $10, full_arch = $11, vinyl = $12, vinyl_theme = $13, park = $14, cust_nt = $15, int_nt = $16, paid = $17, deposit = $18, contract_sign = $19, booked_by = $20, delivered_by = $21 WHERE id = $22 RETURNING *",
      [
        full_name,
        email,
        phone,
        delivery_ad,
        bouncer,
        rent_date,
        rental_time,
        generator,
        balloons,
        half_arch,
        full_arch,
        vinyl,
        vinyl_theme,
        park,
        cust_nt,
        int_nt,
        paid,
        deposit,
        contract_sign,
        booked_by,
        delivered_by,
        id,
      ]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const { rows } = await db.query("select * FROM bookings");

    return res.status(200).json({
      success: true,
      bookings: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getById = async (req, res) => {
  const { idd } = req.params;
  try {
    const bookings = await db.query("SELECT * FROM bookings WHERE id = $1", [
      idd,
    ]);
    res.json(bookings.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};
