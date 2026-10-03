const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const app=express()

app.use(express.json())//data from the request body will be parsed as JSON and made available in req.body
app.use(cookieParser())//cookie-parser middleware will parse the cookies attached to the client request object and make them available in req.cookies
app.use("/api/auth",authRoutes)
module.exports=app
//api and middleware in app.js