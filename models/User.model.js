import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    avatar:{
        type:String,
        require:true
    },
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    contect:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    }],
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    }]
});

const User = mongoose.model("User" , userSchema);

export default User;

// helper Functions

UserSchema.pre("save" , async function(next){
    if(this.isModified("password")){
        bcrypt.hash(this.password , 11).then((data) =>{
            this.password = data;
        })
    }
    next();
})

export const checkPassword = async (password , hashpassword) => {
    return await bcrypt.compare(password , hashpassword);
}