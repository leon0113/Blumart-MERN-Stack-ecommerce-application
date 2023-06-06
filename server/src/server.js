const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan("dev"));

app.get("/test", (request, response)=>{
response.status(200).send({
    message: 'Server on port 3001 is running ok',    
});
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});