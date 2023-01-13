require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

// Set up the email transporter
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY, // Retrieve API key from .env file
    },
  })
);

exports.paymentPost = async (req, res) => {
  try {
    const { email, paymentMethodId, rentals, orderNumber, firstName, lastName } = req.body;

    // Create a customer
    const customer = await stripe.customers.create({
      email: email,
      name: firstName + " " + lastName,
    });
  
    // Process payment for each rental
    for (const rental of rentals) {
      const { duration, addOn1, addOn2 } = rental;
      let price = 0;
      if (duration === 4) {
        price = 300;
      } else if (duration === 6) {
        price = 400;
      } else if (duration === 8) {
        price = 600;
      }
      let amount = price;
      if (addOn1) {
        amount += 500; // add $5.00 for add-on 1
      }
      if (addOn2) {
        amount += 1000; // add $10.00 for add-on 2
      }
      amount *= 100; // convert amount to smallest unit (cents)
  
      // Create a PaymentIntent for each rental
      const paymentIntent = await stripe.paymentIntents.create({
        customer: customer.id, // pass the customer id here
        payment_method: paymentMethodId,
        amount: amount,
        currency: 'usd',
        confirm: true,
        metadata: {
          order_number: orderNumber,
          first_name: firstName,
          last_name: lastName,
        },
      });
  
      console.log(paymentIntent);
    }
    transporter.sendMail({
      from: 'hello@pouncyparties.com',
      to: 'seannmarsden@gmail.com',
      subject: 'Order Confirmation',
      text: `Your order number is ${orderNumber}`
    });

    res.send({ message: "Payment successful" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Payment Failed" });
  }
};