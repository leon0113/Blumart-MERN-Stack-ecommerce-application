const express = require('express');

const app = express();

app.get("/test", (request, response)=>{
response.status(200).send({
    message: 'Server is running ok',
});
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});