const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {connectMongoDB} = require("./connection.js");
require('dotenv').config();

const app = express();
const PORT= 7000;

//mongoDB connection
connectMongoDB(`${process.env.MONGODB_URL}`)
.then(()=>{console.log("Connected to MongoDB")})
.catch((err)=>{console.log(err)});


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}));
app.use(express.static('public'));
app.use(cookieParser())


// routes import 
import userRouter from "./routes/user.routes.js"
import messageRouter from "./routes/message.routes.js"
import channelRouter from "./routes/channel.routes.js"



//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/channels", messageRouter) // TODO: Doubt
app.use("/api/v1/channels", channelRouter)



//server listen
app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)});