const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors')

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))




// get request
app.get("/products", (req, res) => {
    res.status(200).send({
        message: "Prodcuts are returned"
    });
});

// client error handling 
app.use((req, res, next) => {
    next(createError(404, 'Route not found build with http errors'));
})

// server error handling | all the route errors will come here 
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message
  })
})

module.exports = app;