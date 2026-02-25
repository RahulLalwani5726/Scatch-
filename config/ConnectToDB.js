import mongoose from "mongoose";

const connect = () =>{
    try{
        mongoose.connect();
    }catch(error){
        console.log("Connect To DB ERROR :: "+ error);
    }
}

export default connect;