require('dotenv').config({path: "./.env"})
const express = require('express')
const app = express()
require('./models/DBconnection').DBconnection()


app.listen(process.env.PORT, ()=>{
    console.log(`port running on ${process.env.PORT}`)
})