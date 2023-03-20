import Connect from "../../../lib/mongoDb";
import User from "../../../../Backend/Models/loginSchema";
import Contact from "../contact";

Connect()

export default async function handler(req,res){
    const (email,password)=req.body;
    const user =await User.findOne({email,password})
    if(!user){
        return res.json({status:"not able to find"})
    }
    else{
        res.redirect('../contact')
    }
}