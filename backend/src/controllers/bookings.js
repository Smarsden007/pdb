const db = require("../db");

exports.createBooking = async (req, res) => {
  const { fulll_name, delivery_ad, bouncer, rent_date, generator, balloons, vinyl, vinyl_theme, paid,email,phone } = req.body;
  try {
    await db.query(
      "INSERT INTO bookings(fulll_name, delivery_ad, bouncer, rent_date, generator, balloons, vinyl, vinyl_theme, phone,email,paid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9, $10, $11)",
      [
        fulll_name,
        delivery_ad,
        bouncer,
        rent_date,
        generator,
        balloons,
        vinyl,
        vinyl_theme,
        paid,
        email,
        phone
      ]
    );

    return res.status(201).json({
      success: true,
      message: "The creation was successful",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
exports.createBooking2 = async (req, res) => {
  const { 
    selectedDuration,
    selectedBalloons,
    selectedVinyl,
    selectedGenerator,
    selectedGarland,
    selectedDelivery,
    selectedDate,
    selectedTime,
    selectedColors,
    selectedOptionDelivery,
    billingName,
    billingAddress,
    billingCity,
    billingState,
    orderNumber,
    bouncerName,
    billingEmail,
    total_cost
  } = req.body;
  try {
    await db.query(
      "INSERT INTO booking(selected_duration, selected_balloons, selected_vinyl, selected_generator, selected_garland, selected_delivery, selected_date, selected_time, selected_colors, selected_option_delivery, billing_name, billing_address, billing_city, billing_state, order_number,bouncer,billing_email,total) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17, $18)",
      [
        selectedDuration,
        selectedBalloons,
        selectedVinyl,
        selectedGenerator,
        selectedGarland,
        selectedDelivery,
        selectedDate,
        selectedTime,
        selectedColors,
        selectedOptionDelivery,
        billingName,
        billingAddress,
        billingCity,
        billingState,
        orderNumber,
        bouncerName,
        billingEmail,
        total_cost

      ]
    );

    return res.status(201).json({
      success: true,
      message: "The creation was successful",
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
    // Get the ID of the booking to update
    const { id } = req.params;

    // Get the updated data for the booking
    const {
      fulll_name,
      paid,
      // other updated fields go here
    } = req.body;

    // Build the SET clause of the UPDATE statement
    // Only include the fields that have been included in the request body
    const setClause = Object.entries({ fulll_name, paid })
      .filter(([_, value]) => value !== undefined)
      .map(([field, _], index) => `${field} = $${index + 1}`)
      .join(", ");

    // Update the booking in the database
    const result = await db.query(
      `UPDATE bookings
       SET ${setClause}
       WHERE id = $${Object.keys(req.body).length + 1}
       RETURNING *`,
      [...Object.values({ fulll_name, paid }), id]
    );

    // Send the updated booking data as the response
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
  }
};


exports.getBookings = async (req, res) => {
  try {
    const { rows } = await db.query("select * FROM booking");

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
    const { rows } = await db.query(
      "SELECT * FROM bookings ORDER BY id DESC LIMIT 3"
    );

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
      total_cost: rows[0].total_cost_sum,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the total cost",
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
    const sevenDaysFromNow = new Date(
      currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
    );

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
    const upcomingDate = new Date(
      currentDate.getTime() + 14 * 24 * 60 * 60 * 1000
    );

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

exports.getUnpaid = async (req, res) => {
  try {
    // count the number of bookings with paid=false
    const countQuery = "SELECT COUNT(*) FROM bookings WHERE paid=false";
    const { rows } = await db.query(countQuery);
    const count = rows[0].count;
    res.json({ count });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while counting unpaid bookings" });
  }
};
exports.getBookingsPagination = async (req, res) => {
  const { page, pageSize, search } = req.query; // destruct the query parameters
  const offset = (page - 1) * pageSize; // calculate the offset based on the current page and page size
  try {
    // Query the database for bookings
    let result;
    if (search) {
      // If a search query is provided, filter the results based on the search query
      result = await db.query(
        `SELECT * FROM bookings WHERE full_name ILIKE $1 OR email ILIKE $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3`,
        [`%${search}%`, pageSize, offset]
      );
    } else {
      // If no search query is provided, fetch all bookings
      result = await db.query(
        `SELECT * FROM bookings ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
        [pageSize, offset]
      );
    }
    // Get the total count of bookings
    const countResult = await db.query(`SELECT count(*) FROM bookings`);
    const count = parseInt(countResult.rows[0].count);

    // Send the bookings and total count back to the client
    res.json({ bookings: result.rows, count });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};


exports.searchBookings = async (req, res) => {
  try {
    // retrieve the search query from the request body
    const { searchQuery } = req.body;

    // construct the search query
    const searchQueryString = `SELECT * FROM bookings WHERE full_name ILIKE '%${searchQuery}%' OR email ILIKE '%${searchQuery}%' OR phone ILIKE '%${searchQuery}%' OR delivery_ad ILIKE '%${searchQuery}%' OR bouncer ILIKE '%${searchQuery}%' OR half_arch ILIKE '%${searchQuery}%' OR full_arch ILIKE '%${searchQuery}%' OR vinyl_theme ILIKE '%${searchQuery}%' OR cust_nt ILIKE '%${searchQuery}%' OR int_nt ILIKE '%${searchQuery}%'`;

    // execute the search query
    const { rows } = await db.query(searchQueryString);

    // send the search results back to the client
    res.json({ bookings: rows });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while searching for bookings" });
  }
};
exports.calendarDates = async (req, res) => {
  // Get the month and year from the query parameters
  const month = req.query.month;
  const year = req.query.year;

  try {
    // Query the database for rental dates in the specified month and year
    const result = await db.query(
      `SELECT rent_date FROM bookings WHERE EXTRACT(MONTH FROM rent_date) = $1 AND EXTRACT(YEAR FROM rent_date) = $2`,
      [month, year]
    );
    // Format the rental dates as mm/dd/yyyy
    const formattedDates = result.rows.map((row) => {
      const date = new Date(row.rent_date);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    });
    // Send the formatted rental dates back to the client
    res.json(formattedDates);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
exports.availCalender = async (req, res) => {
  Booking.find({ selected_bouncer: req.params.bouncer }, (err, bookings) => {
    if (err) {
      return res.status(500).send(err);
    }
    const dates = bookings.map(booking => booking.selected_date);
    res.json(dates);
  });
}

exports.selectionBouncer1 = async (req, res) => {
  try {
      const bookedDates = await db.query('SELECT selected_date FROM booking WHERE bouncer = $1', ['bouncer1']);
      res.json(bookedDates.rows);
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
  }
};
exports.selectionBouncer2 = async (req, res) => {
  try {
      const bookedDates = await db.query('SELECT selected_date FROM booking WHERE bouncer = $1', ['bouncer2']);
      res.json(bookedDates.rows);
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
  }
};
exports.selectionBouncer3 = async (req, res) => {
  try {
      const bookedDates = await db.query('SELECT selected_date FROM booking WHERE bouncer = $1', ['bouncer3']);
      res.json(bookedDates.rows);
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
  }
};
