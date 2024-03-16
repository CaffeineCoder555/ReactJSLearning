const mongoose = require ("mongoose")

const userModel = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Enter Valid Username"],
        unique: true,
        minLength: [3, "usename is of at least 3 letter"]
    },
    email:{
        lowercase: true,
        trim: true,
        type: String,
        required: [true, "Enter Valid Email"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true,
    },
    Password:{
        type: String,
        require: [true, "Enter Valid Password"],
        unique: true,
        minLength: [8, "usename is of at most letter"],
        maxLength: [15, "usename is of at most letter"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
},
{
    timestamps: true
}
)

const user = mongoose.model("user", userModel)


module.exports = user;