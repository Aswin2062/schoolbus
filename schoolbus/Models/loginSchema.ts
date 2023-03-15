import mongoose, { model } from "mongoose";

const LoginSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports = mongoose.models.User || mongoose.model("User", LoginSchema);