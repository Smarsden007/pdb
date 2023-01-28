require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.paymentPost = async (req, res) => {
  try {
    const paymentMethodId = req.body.paymentMethodId;
    const amount = req.body.amount;
    const orderNumber = req.body.orderNumber;
    const selectedOption1 = req.body.selectedOption1;
    const selectedOption2 = req.body.selectedOption2;
    const selectedOption3 = req.body.selectedOption3;
    const selectedOption4 = req.body.selectedOption4;
    const selectedColors = req.body.selectedColors;
    const selectedDate = req.body.selectedDate;
    const selectedBouncer = req.body.selectedBouncer;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method: paymentMethodId,
      confirmation_method: 'manual',
      confirm: true,
      description: `Order Number: ${orderNumber}`,
      metadata: {
        order_number: orderNumber,
       
      },
    });

    res.json({ status: 'success', paymentIntent, orderNumber });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 'error', message: error.message });
  }
};
