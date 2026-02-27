import mongoose from "mongoose";
import bcrypt from "bcrypt"
const ownerSchema = new mongoose.Schema({
    avatar: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    contect: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }],
    gstin: {
        type: String,
        require: true
    },
    bankAccount: {
        type: String,
        require: true
    },
});

const owner = mongoose.model("owner", ownerSchema);

export default owner;

// helper Functions

ownerSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        bcrypt.hash(this.password, 11)
            .then((data) => {
                this.password = data;
                next();
            })
            .catch((err) => {
                console.log("Error In owner save Pre MiddlesWare" + err);
                next(err);
            })
    }
})

export const checkPassword = async (password, hashpassword) => {
    return await bcrypt.compare(password, hashpassword);
}