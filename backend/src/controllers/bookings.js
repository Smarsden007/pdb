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
exports.getRecentBookings = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM bookings ORDER BY id DESC LIMIT 3");

    return res.status(200).json({
      success: true,
      bookings: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};
exports.getTotalCost = async (req, res) => {
  try {
    // Use the SUM() function to add up all the values in the total_cost column
    const { rows } = await db.query(`
      SELECT SUM(total_cost) as total_cost_sum FROM bookings 
      WHERE rent_date >= '2022-01-01' AND rent_date <= '2022-12-31'
    `);

    return res.status(200).json({
      success: true,
      total_cost: rows[0].total_cost_sum
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the total cost'
    });
  }
};
exports.getTotalCostForCurrentMonth = async (req, res) => {
  try {
    // get the current year and month
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // getMonth returns a 0-based month (0 for January, 11 for December)

    // build the query to select all bookings in the current month
    const query = `
      SELECT SUM(total_cost) as total_cost
      FROM bookings
      WHERE EXTRACT(YEAR FROM created_at) = $1 AND EXTRACT(MONTH FROM created_at) = $2
    `;

    // execute the query and retrieve the sum of the total cost for all bookings in the current month
    const { rows } = await db.query(query, [currentYear, currentMonth]);

    return res.status(200).json({
      success: true,
      totalCost: rows[0].total_cost,
    });
  } catch (error) {
    console.log(error.message);
  }
};
exports.countBookingsWithin7Days = async (req, res) => {
  try {
    const currentDate = new Date();
    const sevenDaysFromNow = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

    const { rows } = await db.query(
      "SELECT COUNT(*) FROM bookings WHERE rent_date BETWEEN $1 AND $2",
      [currentDate, sevenDaysFromNow]
    );

    return res.status(200).json({
      success: true,
      count: rows[0].count,
    });
  } catch (error) {
    console.log(error.message);
  }
};
exports.countBookingsWithin14Days = async (req, res) => {
  try {
    const currentDate = new Date();
    const upcomingDate = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000);

    const { rows } = await db.query(
      "SELECT COUNT(*) FROM bookings WHERE rent_date BETWEEN $1 AND $2",
      [currentDate, upcomingDate]
    );

    return res.status(200).json({
      success: true,
      count: rows[0].count,
    });
  } catch (error) {
    console.log(error.message);
  }
};



