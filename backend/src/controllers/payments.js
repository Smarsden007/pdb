require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.paymentPost = async (req, res) => {
  try {
    const { paymentMethodId, rentals } = req.body;

    // Process payment for each rental
    for (const rental of rentals) {
      const { price, duration, startDate, addOn1, addOn2 } = rental;
      let amount = price; // base price
      if (addOn1) {
        amount += 500; // add $5.00 for add-on 1
      }
      if (addOn2) {
        amount += 1000; // add $10.00 for add-on 2
      }
      amount *= duration; // multiply by duration
      const charge = await stripe.charges.create({
        amount: amount, // charge amount in cents
        currency: "usd",
        payment_method: paymentMethodId,
      });
      console.log(charge);
    }

    res.send({ message: "Payment successful" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Payment Failed" });
  }
};
