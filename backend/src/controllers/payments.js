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

exports.paymentPost = (req, res) => {
  try {
      // Get the token, options, and total amount from the request body
      const { token, options, total } = req.body;

      // Use the Stripe API to create a charge
      const charge = stripe.charges.create({
          amount: total,
          currency: 'usd',
          description: 'Example charge',
          source: token.id,
      });

      // Send a success response
      res.json({ status: 'success' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error' });
  }
};