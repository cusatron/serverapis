const express = require('express');
const app = express();

const cors = require("cors");
const fizzBuzz= require('./FizzBuzz');
const middleware =  require('./middleware'); //app validation
app.use(cors());

console.log("server chalega");

app.get("/",async (req,res) => {
    res.send("Ron server running !");
})
app.get("/fizzbuzz",middleware, async (req,res) => {
    console.log("fixx buzz ");
    await fizzBuzz(req,res);
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server started at ${PORT} `))