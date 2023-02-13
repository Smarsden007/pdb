const db = require("../db");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
    total_cost,
    phone
  } = req.body;
  try {
    await db.query(
      "INSERT INTO booking(selected_duration, selected_balloons, selected_vinyl, selected_generator, selected_garland, selected_delivery, selected_date, selected_time, selected_colors, selected_option_delivery, billing_name, billing_address, billing_city, billing_state, order_number,bouncer,billing_email,total, phone) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17, $18, $19)",
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
        total_cost,
        phone

      ]
    );
    const adminMsg = {
      to: 'hello@pouncyparties.com',
      from: 'hello@pouncyparties.com',
      subject: 'New Booking Created',
      text: `A new booking has been created with the following details: 
      selectedDuration: ${selectedDuration}
      selectedBalloons: ${selectedBalloons}
      selectedVinyl: ${selectedVinyl}
      selectedGenerator: ${selectedGenerator}
      selectedGarland: ${selectedGarland}
      selectedDelivery: ${selectedDelivery}
      selectedDate: ${selectedDate}
      selectedTime: ${selectedTime}
      selectedColors: ${selectedColors}
      selectedOptionDelivery: ${selectedOptionDelivery}
      billingName: ${billingName}
      billingAddress: ${billingAddress}
      billingCity: ${billingCity}
      billingState: ${billingState}
      orderNumber: ${orderNumber}
      bouncerName: ${bouncerName}
      billingEmail: ${billingEmail}
      total_cost: ${total_cost}
      phone: ${phone}`,
    };
    await sgMail.send(adminMsg);
    const customerMsg = {
      to: billingEmail,
      from: 'hello@pouncyparties.com',
      subject: 'Pouncy Parties - Reservation Details',
      html: `
      <html>
        <head>
          <style>
            h1 {
              color: #c0a58e;
            }
            p {
              font-size: 16px;
            }
          </style>
        </head>
        <body>
        <img src='https://ibb.co/LhJxTj0' height="200" width="500" alt='header image'>
          <h1>Reservation Confirmation</h1>
          <p>Your reservation has been confirmed.</p>
          <p>Reservation Number: ${orderNumber}</p>
          <p>Details:</p>
          <p>Selected Duration: ${selectedDuration}</p>
          <p>Selected Balloons: ${selectedBalloons}</p>
          <p>Selected Vinyl: ${selectedVinyl}</p>
          <p>Selected Generator: ${selectedGenerator}</p>
          <p>Selected Garland: ${selectedGarland}</p>
          <p>Selected Delivery: ${selectedDelivery}</p>
          <p>Selected Date: ${selectedDate}</p>
          <p>Selected Time: ${selectedTime}</p>
          <p>Selected Colors: ${selectedColors}</p>
          <p>Selected Option Delivery: ${selectedOptionDelivery}</p>
          <p>Billing Name: ${billingName}</p>
          <p>Billing Address: ${billingAddress}</p>
          <p>Billing City: ${billingCity}</p>
          <p>Billing State: ${billingState}</p>
          <p>Bouncer Name: ${bouncerName}</p>
          <p>Billing Email: ${billingEmail}</p>
          <p>Total Cost: ${total_cost}</p>
          <p>Phone: ${phone}</p>
        </body>
      </html>
      `
    };
  
    await sgMail.send(customerMsg);
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
      SELECT SUM(total) as total_sum FROM booking 
      WHERE selected_date >= '2023-01-01' AND selected_date <= '2023-12-31'
    `);

    return res.status(200).json({
      success: true,
      total: rows[0].total_sum,
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
      SELECT SUM(total) as total
      FROM booking
      WHERE EXTRACT(YEAR FROM selected_date) = $1 AND EXTRACT(MONTH FROM selected_date) = $2
    `;

    // execute the query and retrieve the sum of the total cost for all bookings in the current month
    const { rows } = await db.query(query, [currentYear, currentMonth]);

    return res.status(200).json({
      success: true,
      total: rows[0].total,
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
      "SELECT COUNT(*) FROM booking WHERE selected_date BETWEEN $1 AND $2",
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
      "SELECT COUNT(*) FROM booking WHERE selected_date BETWEEN $1 AND $2",
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
        `SELECT * FROM booking WHERE billingName ILIKE $1 OR billingEmail ILIKE $1 ORDER BY selectedDate DESC LIMIT $2 OFFSET $3`,
        [`%${search}%`, pageSize, offset]
      );
    } else {
      // If no search query is provided, fetch all bookings
      result = await db.query(
        `SELECT * FROM booking ORDER BY selectedDate DESC LIMIT $1 OFFSET $2`,
        [pageSize, offset]
      );
    }
    // Get the total count of bookings
    const countResult = await db.query(`SELECT count(*) FROM booking`);
    const count = parseInt(countResult.rows[0].count);

    // Send the bookings and total count back to the client
    res.json({ booking: result.rows, count });
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
    const searchQueryString = `SELECT * FROM booking WHERE billingName ILIKE '%${searchQuery}%' OR billingEmail ILIKE '%${searchQuery}%' OR phone ILIKE '%${searchQuery}%' OR billingAddress ILIKE '%${searchQuery}%' OR bouncer ILIKE '%${searchQuery}%' OR selectedBalloons ILIKE '%${searchQuery}%' OR selectedBackdrop ILIKE '%${searchQuery}%' OR selectedVinyl ILIKE '%${searchQuery}%' OR selectedTime ILIKE '%${searchQuery}%' OR selectedColor ILIKE '%${searchQuery}%'`;

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
