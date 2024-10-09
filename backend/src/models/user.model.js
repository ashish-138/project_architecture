import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }

},{timestamp:true})

export default mongoose.model("User",userSchema)