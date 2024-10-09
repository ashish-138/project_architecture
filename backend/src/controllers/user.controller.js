import User from "../models/user.model.js"
import bcrypt from"bcrypt"
import jwt from "jsonwebtoken"



const registerUser = async (req,res)=>{
    try {

        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);

        console.log(req.body)
        
        const newUser = new User({
            name:req.body.name
        })

        await newUser.save();
        res.status(200).json("user registered succefully.")
    } catch (error) {
        res.status(500).json(error+"something is wrong")
    }
}


const loginUser = async(req,res)=>{
    try {
        const token = await jwt.sign({},key)

        //password veryfication
        // const validPassword = await bcrypt.compare(req.body.password, user.password);

        //jwt verify
        // const token = jwt.verify(req.body.token, process.env.REFERESH_TOKEN_SECRET)
    } catch (error) {
        
    }
}


export {registerUser,loginUser}