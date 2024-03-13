const mongoose = require('mongoose')

exports.DBconnection= async ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log('connection established!')
    }catch(error){
        console.log(error.message);
    }
}