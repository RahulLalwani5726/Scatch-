import debug from "debug";
const debuger = debug("devlopment:owner-create");
const asyncHandler = (fn) =>{
    return (req , res , next) =>{
        Promise.resolve(fn(req , res , next))
        .catch((err) => debuger(err))
    }
}
export default asyncHandler ;