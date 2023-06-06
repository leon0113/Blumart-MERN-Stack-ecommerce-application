const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const isLoggedIn = (req, res, next) => {
    const login = true;
    if(login){
        req.body.id = 101;
        next();
    }else{
        return res.status(401).json({message: 'Please login first'});
    }
    
}
// works for every request
// app.use(isLoggedIn);

app.get("/test", (request, response) => {
    response.status(200).send({
        message: 'Server on port 3001 is running ok',
    });
});

app.get("/api/user", isLoggedIn, (request, response) => {
    console.log(request.body.id);
    response.status(200).send({
        message: 'User profile is running ok',
    });
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});