import owner from "../../models/Owner.model.js";
import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";

const create = asyncHandler(async (req , res) =>{
    const {fullname , email ,password } = req.body;

    if(!fullname || !email || !password){
        throw new apiError(401 , "Missing Details");
    }

    const ownerobj = {
        fullname , email , password
    }
    const ownerMongoObj = await owner.create(ownerobj);

    if(!ownerMongoObj) throw new apiError(501 , "Somthing Went Wrong While Creatign Owner");

    return res
    .status(200)
    .json(ownerMongoObj);
})