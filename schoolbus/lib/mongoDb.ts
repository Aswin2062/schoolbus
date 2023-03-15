import mongoose from "mongoose";

const Connection = {};
async function Connect (){
    if (Connection.isConnected){
        return
    }
    const db = await mongoose.connect(process.env = MONGODB_URL);
    Connection.isConnected = db.connection[0].readyState

} 
export default Connect;