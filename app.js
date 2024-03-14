require('dotenv').config({path: "./.env"})
const express = require('express')
const app = express()
require('./models/DBconnection').DBconnection()
const userRouter = require("./routes/userRoute.js")

//logger- is use to know which route is hit(print on terminal)
app.use(require("morgan")("dev"))

//body parser- this line is use to active the post route
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/user", userRouter);


//server
app.listen(process.env.PORT, ()=>{
    console.log(`port running on ${process.env.PORT}`)
})