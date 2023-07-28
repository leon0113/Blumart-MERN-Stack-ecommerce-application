const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//! middleware
const isLoggedIn = (req, res, next) => {
    const logIn = true;
    if (logIn) {
        req.body.id = 101;
        next();
    } else {
        return res.status(401).json({
            message: 'Please log in first'
        })
    }
    //  console.log("isLoggedIn middleware");
};

//? used isLoggedIn middleware for this get request
app.get("/api/user", isLoggedIn, (req, res) => {
    console.log(req.body.id);
    // console.log('User profile');
    res.status(200).send({
        message: "User profile is returned"
    });
});
// get request
app.get("/products", (req, res) => {
    res.status(200).send({
        message: "Prodcuts are returned"
    });
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// client error handling 
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route not found'
    })
    next();
})

// server error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})