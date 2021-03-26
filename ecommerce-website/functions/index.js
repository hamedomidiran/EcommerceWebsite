const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IYvU1F5ZoQtexlbmNpYBg1zpaC60gMW6fwHms5xg5pUnJcDgqtKOTKJxNDD1jqZBH1t1xYIlXpzrHXfYOcRTxDg00tfXyFDXZ"
);

//API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //in subunits of the currency
        currency: "usd",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })


})


//Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/ecommerce-website-e8f42/us-central1/api