import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    discount:{
        type:Number,
        require:true
    },

    bgColor:{
        type:String,
        require:true
    },
    pannelColor:{
        type:String,
        require:true
    },
    textColor:{
        type:String,
        require:true
    },

});

const Product = mongoose.model("Product" , productSchema);

export default User;
