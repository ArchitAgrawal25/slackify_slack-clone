const express = require('express');
const {connectMongoDB} = require("./connection.js");
require('dotenv').config();

const app =  express();
const PORT= 7000;

connectMongoDB(`${process.env.MONGODB_URL}`)
.then(()=>{console.log("Connected to MongoDB")})
.catch((err)=>{console.log(err)});

app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)});