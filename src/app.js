const logger = require("morgan");
const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();
const { connectToDatabase } = require("../config/database.js");
const routes = require("./routes");
const Stripe = require('stripe');
const fileUpload = require('express-fileupload');

(async () => {
  connectToDatabase();

  const allowedOrigins = "*";
  const corsOptionsAll = {
    optionsSuccessStatus: 202,
    origin: allowedOrigins,
    credentials: true,
  };

  const app = express();
  const server = http.createServer(app);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
  }));
  app.use(cors(corsOptionsAll));
  app.use(express.json({ limit: "10mb" }));
  app.use(logger("dev"));

  app.use(function (req, res, next) {
    res.success = async (data, meta) => {
      return res
        .status(200)
        .send({ success: true, error: null, body: data, meta });
    };

    res.error = async (error) => {
      return res.status(error.status || 500).send({
        success: false,
        error: error.message || "Internal Server Error",
        body: null,
        status: error.status || 500,
      });
    };

    next();
  });

  app.use("/api", routes);
  app.post('/create-checkout-session', async (req, res) => {
    const { serviceName, price } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['klarna'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: serviceName,
              },
              unit_amount: Math.round(price * 100),
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.FRONTEND_URL}/success`,
        cancel_url: `${process.env.FRONTEND_URL}`,
      });

      res.json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  app.use((req, res) => {
    return res.status(404).send({ error: "Route not found" });
  });

  const port = process.env.PORT || 3344;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
