import mongoose from "mongoose";
import debug from "debug";

const debuger = debug("devlopment:mongoose");
const connect = async() =>{
    try{
        await mongoose.connect(process.env.DB_URI);
        debuger("Connect Success");
    }catch(error){
        debuger("Connect To DB ERROR :: "+ error);
    }
}

export default connect;