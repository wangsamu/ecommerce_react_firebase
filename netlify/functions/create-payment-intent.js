require("dotenv").config();

const stripeClient = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const stripe = require("stripe")(
// "sk_test_51Luc9LL9rnDtPRNgIQMJmM4iAgCWy2VwUAhCcri9bG4Rx6zRiLAqjYfAuqBEHxJTLrPT8q7TAR7Qx8m4VvHGK4eg00cI2qjzGW"
// );

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount,
      currency: "eur",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 400, body: JSON.stringify({ error }) };
  }
};
