require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.paymentPost = async (req, res) => {
  try {
    const { paymentMethodId, rentals } = req.body;

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
      const paymentIntent = await stripe.paymentIntents.create({
        payment_method: paymentMethodId,
        amount: amount,
        currency: 'usd',
        confirm: true,
      });
      
      
    
      console.log(paymentIntent);
    }
    res.send({ message: "Payment successful" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Payment Failed" });
  }
};
